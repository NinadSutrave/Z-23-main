const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const firebase = require("./config/firebase");

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.post("/signup", function(req, res){
    if (!req.body.email) {
      return res.status(422).json({
        email: "email is required"
      });
    }
    if (!req.body.password) {
      return res.status(422).json({
        password: "password is required"
      });
    }
    if (!req.body.cpassword) {
      return res.status(422).json({
        password: "Confirm password is required"
      });
    }
    if(req.body.password==req.body.cpassword)
    {
      firebase
      .auth()
      .createUserWithEmailAndPassword(req.body.email, req.body.password)
      .then((data) => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
        
        return res.status(201).json(data);
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          return res.status(500).json({ error: errorMessage });
        } else {
          return res.status(500).json({ error: errorMessage });
        }
      });
      
    }
    else
      {
        return res.status(422).json({
          password: "Password is not matching. Please fill same password"
        });
      }
  });
app.post("/signin",function(req, res){
    if (!req.body.email || !req.body.password) {
      return res.status(422).json({
        email: "email is required",
        password: "password is required",
      });
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          return res.status(500).json({ error: errorMessage });
        } else {
          return res.status(500).json({ error: errorMessage });
        }
      });
  });
app.post("/forget-password",  function(req, res){
    if (!req.body.email) {
      return res.status(422).json({ email: "email is required" });
    }
    firebase
      .auth()
      .sendPasswordResetEmail(req.body.email)
      .then(function () {
        return res.status(200).json({ status: "Password Reset Email Sent" });
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
          return res.status(500).json({ error: errorMessage });
        } else if (errorCode == "auth/user-not-found") {
          return res.status(500).json({ error: errorMessage });
        }
      });
  });
app.post("/signout", function(req,res){
    const user = firebase.auth().currentUser;
    if (user) {
        firebase.auth().signOut().then(() => {
            res.status(422).json({message: "User successfully logged out"}); // Just for the example.
        }).catch(error => console.log('Something went wrong! ', error))
    } else {
        res.status(403).json({
            status: 'failure',
            message: 'user already logged out.'
        });
    }
});

app.listen(3000,function(){
    console.log(`Server started at 3000`);
})
