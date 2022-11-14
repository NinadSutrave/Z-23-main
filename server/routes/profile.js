const firebase = require("./../config/firebase");
const admin = require("./../config/admin");
const express = require('express')
const { getUserDetail, addUserDetail, leaderBoard, phoneUpdate } = require("../controllers/profile");
const router = express.Router()

router.route('/getUser').post(getUserDetail)
router.route('/addUser').post(addUserDetail)
router.route('/phoneUpdate').post(phoneUpdate)

module.exports = router