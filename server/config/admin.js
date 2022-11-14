const admin = require("firebase-admin");

const credentials = require("../z23-ca.json");
admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

module.exports = admin;
