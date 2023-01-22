const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require('./routes/profile')
const eventRoutes = require('./routes/events')

const admin = require("./config/admin");
const db = admin.firestore();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use('/profile',userRoutes)
app.use('/', require('./routes/payment'));
// app.use('/', require('./routes/purchase'));
app.use('/', require('./routes/purchase'));
app.use('/events',eventRoutes)
// app.use('/', require('./routes/purchaseItem'));

app.listen(8080, function () {
  console.log(`Server started at 8080`);
});
