const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const axios = require("axios");


const admin = require("./../config/admin");
const db = admin.firestore();

app.post("/purchase", async (req, res) => {
        
        const orderPlaced = db.collection("payments").doc(orderId);
        const doc = await orderPlaced.get();
        if(doc.exists)
        {
                db.collection("orders").doc(email).set(req.body);
                console.log("order placed successfully");
                res.status(200).send("order placed successfully");
        }
        else{
            console.log("failed");
        }
});


module.exports = app;