const express = require('express')
const { addEvents,addUser,addUserWithCoin,getEventList,getEventListAdvitya,getEventListZeitgeist } = require("../controllers/events");
const router = express.Router()

router.route('/addEvent').post(addEvents)
router.route('/addUsers').put(addUser)
router.route('/addUser-zCoin').post(addUserWithCoin)
router.route('/getEvents/:eventId').get(getEventList)
router.route('/getAdvitiyaEvents').get(getEventListAdvitya)
router.route('/getZeitgeistEvents').get(getEventListZeitgeist)

module.exports = router