import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpeEyQEmanOUuX3RBY7gq2-YgGcAzA3Ys",
  authDomain: "mario-plan-f7b00.firebaseapp.com",
  databaseURL: "https://mario-plan-f7b00.firebaseio.com",
  projectId: "mario-plan-f7b00",
  storageBucket: "mario-plan-f7b00.appspot.com",
  messagingSenderId: "86391531399"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
