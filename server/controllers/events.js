const admin = require('../config/admin')
const db = admin.firestore()

// adding event
exports.addEvents = async (req, res) => {
    try {
        const id = req.body.name
        const eventJson = {
            name: req.body.name,
            imgUrl: req.body.imgUrl,
            desc: req.body.desc,
            category: req.body.category,
            participants: 0,
            entryFee: req.body.entryFee - zCoin,
            cashPrize: req.body.cashPrize,
            ruleBook: req.body.ruleBook,
            isAdvitiya: req.body.isAdvitiya,
            participantsList: [],
        }
        const res = await db.collection("events").doc(id).set(eventJson)
        console.log(res)
        res.status(200).json(res)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getEventList = async (req, res) => {
    try {
        const snapShot = await db.collection("events").get()
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        res.status(200).json(list)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

// list of all Zeitgeist events
exports.getEventListZeitgeist = async (req, res) => {
    try {
        const snapShot = await db.collection("events").get()
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        const list2 = []
        list.forEach(async (element, i) => {
            if (element.isAdvitiya === false) {
                list2.push(element)
            }
        })
        res.status(200).json(list2)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

//list of all advitiya events
exports.getEventListAdvitya = async (req, res) => {
    try {
        const snapShot = await db.collection("events").get()
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        const list2 = []
        list.forEach(async (element, i) => {
            if (element.isAdvitiya === true) {
                list2.push(element)
            }
        })
        res.status(200).json(list2)
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}


// user does't use zCoin for the event
exports.addUser = async (req, res) => {
    try {
        const event = req.body.name
        const snapShot = await db.collection("events").get()
        const userEmail = req.body.userEmail
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        let temp
        list.forEach(async (element, i) => {
            if (element.name === event) {
                temp = element
                element.participants.push(userEmail)
                res.status(200).json(element.participants)
            }
        })
        if (temp === undefined || temp === null) {
            res.status(400).json("event not found")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

// user using zCoin for register in an event -- this will work after the creating mainUser with auth and registeration
exports.addUserWithCoin = async (req, res) => {
    try {
        const event = req.body.name
        const snapShot = await db.collection("events").get()
        //const snapShot2 = await db.collection("mainUsers").get()
        const userEmail = req.body.userEmail
        const zCoin = req.body.zCoin
        const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        //const list2 = snapShot2.docs.map((doc) => ({ id: doc.id, ...doc.data }))
        let temp
        list.forEach(async (element, i) => {
            if (element.name === event) {
                temp = element
                element.participants.push(userEmail)
                if (zCoin < element.entryFee) {
                    element.entryFee = element.entryFee - zCoin
                    // list2.forEach(async (ele, index) => {
                    //     if (userEmail === ele.email) {
                    //         ele.zCoin = 0
                    //     }
                    // })
                    db.collection("mainUsers").doc(userEmail).update({ 'zCoin': 0 });
                }
                else {
                    element.entryFee = 0;
                    // zCoin = zCoin - element.entryFee
                    // list2.forEach(async (ele, index) => {
                    //     if (userEmail === ele.email) {
                    //         ele.zCoin = zCoin
                    //     }
                    // })
                    db.collection("mainUsers").doc(userEmail).update({ 'zCoin': zCoin - element.entryFee });
                }
                res.status(200).json(element.participants)
            }
        })
        if (temp === undefined || temp === null) {
            res.status(400).json("event not found")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

// using reference code when paying for event and updating zCoin for the person of refrence code
// to be completed
exports.discountRefer = async (req, res) => {
    try {

        const eventName = req.body.eventName
        const refCode = req.body.refCode
        const userEmail = req.body.userEmail
        const snapShot = await db.collection("events").get()
        if (db.collection('mainUsers').doc(refCode) !== null) {
                db.collection('mainUsers').doc(refCode).update({ 'zCoin': zCoin + 10 })
            const list = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data }))
            let temp
            list.forEach(async (element, i) => {
                if (element.name === eventName) {
                    temp = element
                    element.participants.push(userEmail)
                    res.status(200).json(element.participants)
                }
            })
            if (temp === undefined || temp === null) {
                res.status(400).json("event not found")
            }
        }
        else if(db.collection('CA').doc(refCode) !== null)
        {

        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}