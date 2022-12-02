require("dotenv").config({path: "./../.env"});

var PaytmConfig = {
  mid: process.env.MID,
  key: process.env.KEY,
  website: process.env.WEBSITE
}

module.exports.PaytmConfig = PaytmConfig