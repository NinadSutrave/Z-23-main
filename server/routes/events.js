const express = require('express')
const { addEvents,addUser,addUserWithCoin,getEventList,getEventListAdvitya,getEventListZeitgeist } = require("../controllers/events");
const router = express.Router()

router.route('/addEvent').post(addEvents)
router.route('/addUser').post(addUser)
router.route('/addUser-zCoin').get(addUserWithCoin)
router.route('/getEvents').post(getEventList)
router.route('/getAdvitiyaEvent').post(getEventListAdvitya)
router.route('/getZeitgeistEvent').post(getEventListZeitgeist)

module.exports = router