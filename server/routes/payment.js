const express = require("express");
const app = express();
const https = require("https");
// const bodyParser = require("body-parser");

const qs = require("querystring");

const PaytmChecksum = require("./Paytm/checksum");
const PaytmConfig = require("./Paytm/config");

const admin = require("./../config/admin");
const db = admin.firestore();
const firebase = require("./../config/firebase")
// const parseUrl = express.urlencoded({ extended: false });
// const parseJson = express.json({ extended: false });

// app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/paynow", (req, res) => {

    const orderId = 'TEST_' + new Date().getTime()
    console.log(orderId);
    const email = req.body.email;
    const phone = req.body.phone;
    const amount = req.body.amount;

    const paytmParams = {}

    paytmParams.body = {
        "requestType": "Payment",
        "mid": PaytmConfig.PaytmConfig.mid,
        "websiteName": PaytmConfig.PaytmConfig.website,
        "orderId": orderId,
        "callbackUrl": "http://localhost:5000/callback",
        "txnAmount": {
            "value": amount,
            "currency": "INR",
        },
        "userInfo": {
            "custId": email,
        },
    };

    PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), PaytmConfig.PaytmConfig.key).then(function (checksum) {

        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        var options = {

            /* for Staging */
            hostname: 'securegw-stage.paytm.in',

            /* for Production */
            // hostname: 'securegw.paytm.in',

            port: 443,
            path: `/theia/api/v1/initiateTransaction?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });

            post_res.on('end', function () {
                response = JSON.parse(response)
                console.log('txnToken:', response);

                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(`<html>
                                <head>
                                    <title>Show Payment Page</title>
                                </head>
                                <body>
                                    <center>
                                        <h1>Please do not refresh this page...</h1>
                                    </center>
                                    <form method="post" action="https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}" name="paytm">
                                        <table border="1">
                                            <tbody>
                                                <input type="hidden" name="mid" value="${PaytmConfig.PaytmConfig.mid}">
                                                    <input type="hidden" name="orderId" value="${orderId}">
                                                    <input type="hidden" name="txnToken" value="${response.body.txnToken}">
                                         </tbody>
                                      </table>
                                                    <script type="text/javascript"> document.paytm.submit(); </script>
                                   </form>
                                </body>
                             </html>`)
                res.end()
            });
        });

        post_req.write(post_data);
        post_req.end();
    })


});
app.post("/callback", (req, res) => {
    const data = req.body;
    const paytmChecksum = req.body.CHECKSUMHASH
    // console.log(paytmChecksum);
    var isVerifySignature = PaytmChecksum.verifySignature(data, PaytmConfig.PaytmConfig.key, paytmChecksum)
    if (isVerifySignature) {
        console.log("Checksum Matched");

        var paytmParams = {};

        paytmParams.body = {
            "mid": PaytmConfig.PaytmConfig.mid,
            "orderId": data.ORDERID,
        };

        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), PaytmConfig.PaytmConfig.key).then(function (checksum) {
            paytmParams.head = {
                "signature": checksum
            };

            var post_data = JSON.stringify(paytmParams);

            var options = {

                /* for Staging */
                hostname: 'securegw-stage.paytm.in',

                /* for Production */
                // hostname: 'securegw.paytm.in',

                port: 443,
                path: '/v3/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            // Set up the request
            var response = "";
            var post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    response += chunk;
                });

                post_res.on('end', function () {
                    console.log('Response: ', response);
                    let result = JSON.parse(response);

                    if (result.body.resultInfo.resultStatus === 'TXN_SUCCESS') {
                        //store in db

                        db.collection('payments').doc(result.body.orderId).set(result.body)
                            .then(() => console.log("Update success"))
                            .catch(() => console.log("Unable to update"))
                    }
                    else{
                        db.collection('payments_fail').doc(result.body.orderId).set(result.body)
                            .then(() => console.log("Update success"))
                            .catch(() => console.log("Unable to update"))
                    }
                    res.write(response);
                    res.end();
                });
            });

            // post the data
            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("Checksum Mismatched");
    }
    // })
});

module.exports = app;