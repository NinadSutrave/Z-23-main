const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyB07j7UHOxETsVHmYO77PDEn4yKEKJwLZY",
  authDomain: "zeitgeist-12de4.firebaseapp.com",
  projectId: "zeitgeist-12de4",
  storageBucket: "zeitgeist-12de4.appspot.com",
  messagingSenderId: "1057139878353",
  appId: "1:1057139878353:web:415e6d43208d2eead7d8f0",
  measurementId: "G-6XJ0PSDL6V"
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase;

