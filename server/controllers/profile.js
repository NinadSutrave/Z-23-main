const firebase = require("./../config/firebase")
const admin = require("../config/admin");
const db = admin.firestore();
const shortid = require("shortid");

exports.addUserDetail = (req, res) => {
    try {
        const id = req.body.email;
        const userJson = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            YearOfPassing: req.body.YearOfPassing,
            gender: req.body.gender,
            phone: req.body.phone,
            collegeName: req.body.collegeName,
            collegeState: req.body.collegeState,
            Zcoin: 0,
            referrer_code: req.body.referral,
            referral_code: "Z23"+shortid.generate(),
            invite: 0,
        };
        const response = db.collection("Users").doc(id).set(userJson);
        console.log("updated successfully");
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getUserDetail = async(req, res) => {
    try {
        const snapshot = await db.collection("Users").get()
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        var temp
        list.forEach(element => {
            if (element.email === req.body.id) {
                temp = element
                res.status(200).json(element)
            }
        })
        if (temp === undefined || temp === null) { res.status(400).json("not found") }
    } catch (error) {
        console.log("error");
        res.status(500).send(error);
    }
}
exports.phoneUpdate = async(req, res) => {
    try {
        db.collection("Users").doc(req.body.email).update({ 'phone': req.body.phone });
        res.status(200).send("Phone Updated successfully");
    } catch (error) {
        console.log("error");
        res.status(404).send(error);
    }
}