import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA85ZkD1Jf0VZpBNZGDMT2Dukw5EmBr5eA",
  authDomain: "marioplan-c56e2.firebaseapp.com",
  databaseURL: "https://marioplan-c56e2.firebaseio.com",
  projectId: "marioplan-c56e2",
  storageBucket: "marioplan-c56e2.appspot.com",
  messagingSenderId: "61232685860",
  appId: "1:61232685860:web:6c53be50c5a99b18d109b1",
  measurementId: "G-WPKYMXDVWY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
