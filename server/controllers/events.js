const admin = require('../config/admin')
const db = admin.firestore()
const Event = require('../models/eventModel')

exports.addEvents = async (req, res) => {
    try {
        const data = req.body;
        const event = await db.collection('events').doc().set(data);
        res.status(200).send({'message': 'Event added successfully'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getEventList = async (req, res) => {

    var eventId = req.params.eventId;
    const snap = await db.collection("events").doc(eventId);

        console.log(snap);

    try {
        const snapShot = await db.collection("events").get();
        
        if(snapShot.empty) {
            res.status(404).send({'message': 'No events found'});
        } else {
            snapShot.forEach(doc => {
                if(doc.id === eventId) {
                    const event = new Event(
                        doc.id,
                        doc.data().name,
                        doc.data().description,
                        doc.data().imageUrl,
                        doc.data().category,
                        doc.data().isAdvitiya,
                        doc.data().participants,
                        doc.data().participantList,
                        doc.data().entryFee,
                        doc.data().cashPrize,
                        doc.data().rulebookLink
                    )
                    return res.status(200).send(event);
                }
            }) 
        }
        return res.status(404).send({'message': 'No event with specified Event ID'});
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getEventListZeitgeist = async (req, res) => {
    try {
        const snapShot = await db.collection("events").get();
        
        if(snapShot.empty) {
            return res.status(404).send({'message': 'No events found'});
        } else {
            snapShot.forEach(doc => {
                if(!doc.data().isAdvitiya) {
                    const event = new Event(
                        doc.id,
                        doc.data().name,
                        doc.data().description,
                        doc.data().imageUrl,
                        doc.data().category,
                        doc.data().isAdvitiya,
                        doc.data().participants,
                        doc.data().participantList,
                        doc.data().entryFee,
                        doc.data().cashPrize,
                        doc.data().rulebookLink
                    )
                    return res.status(200).send(event);
                }
            }) 
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.getEventListAdvitya = async (req, res) => {
    try {
        const snapShot = await db.collection("events").get();
        
        if(snapShot.empty) {
            return res.status(404).send({'message': 'No events found'});
        } else {
            snapShot.forEach(doc => {
                if(doc.data().isAdvitiya) {
                    const event = new Event(
                        doc.id,
                        doc.data().name,
                        doc.data().description,
                        doc.data().imageUrl,
                        doc.data().category,
                        doc.data().isAdvitiya,
                        doc.data().participants,
                        doc.data().participantList,
                        doc.data().entryFee,
                        doc.data().cashPrize,
                        doc.data().rulebookLink
                    )
                    return res.status(200).send(event);
                }
            }) 
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

exports.addUser = async (req, res) => {
    try {
        const eventId = req.body.eventId;
        const newParticipants = req.body.newParticipants;

        const snapShot = await db.collection("events").get();

        if(snapShot.empty) {
            return res.status(404).send({'message': 'No events found'});
        }

        var curr = new Array();
        var found = false;
        snapShot.forEach(doc => {
            if(doc.id === eventId) {
                found = true;
                if(doc.data().participantsList) {
                    curr = doc.data().participantsList;
                }
            }
        })

        if(!found) {
            return res.status(404).send({'message': 'Event not found'});
        }

        const final = new Set([...curr, ...newParticipants]);

        await db.collection('events').doc(eventId).update({'participantsList': Array.from(final)});

        res.status(200).send({'message': 'Participant list updated'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

// user using zCoin for register in an event -- this will work after the creating mainUser with auth and registeration
exports.addUserWithCoin = async (req, res) => {
    try {
        const userId = req.body.userId;
        const zCoins = req.body.zCoins;
        const participationInfo = req.body.participationInfo;
        // [{
        //     "eventId": "1234",
        //     "participantsList": ["345". "567", "678"]
        // }]

        if(zCoins<0) {
            return res.status(500).send({'message': 'Invalid number of zCoins'});
        }

        const userSnap = await db.collection("users").get();

        if(userSnap.empty) {
            return res.status(404).send({'message': 'No users found'});
        }

        var currZCoins;
        var found = false;
        userSnap.forEach(doc => {
            if(doc.id === userId) {
                found = true;
                currZCoins = doc.data().zCoins;
            }
        })

        if(!found) {
            return res.status(404).send({'message': 'User not found'});
        }

        if(zCoins > currZCoins) {
            return res.status(500).send({'message': 'Insufficient Z Coins'});
        }

        const eventIds = new Array();
        participationInfo.forEach((pInfo) => {
            eventIds.push(pInfo.eventId);
        });

        console.log(eventIds)

        const eventSnap = await db.collection("events").get();
        var totalCost = 0;
        eventSnap.forEach(doc => {
            if(eventIds.includes(doc.id)) {
                totalCost = totalCost + doc.data().entryFee;
            }
        })

        participationInfo.forEach(async (pInfo) => {

            const snapShot = await db.collection("events").get();

            var curr = new Array();
            var found = false;
            snapShot.forEach(doc => {
                if(doc.id === pInfo.eventId) {
                    found = true;
                    if(doc.data().participantsList) {
                        curr = doc.data().participantsList;
                    }
                }
            })

            if(!found) {
                return res.status(404).send({'message': 'Event not found while updating participants'});
            }

            var newList = new Array();
            newList = pInfo.participantList;

            const final = new Set([...curr, ...newList]);

            await db.collection('events').doc(pInfo.eventId).update({'participantsList': Array.from(final)});

        })

        currZCoins = currZCoins - zCoins;
        await db.collection('users').doc(userId).update({'zCoins': currZCoins});

        res.status(200).send({'message': 'ZCoins and Participation List updated'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}