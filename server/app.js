const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require('./routes/profile')

const admin = require("./config/admin");
const db = admin.firestore();

// app.use(verificaton());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/profile',userRoutes)


app.listen(5000, function () {
  console.log(`Server started at 5000`);
});
