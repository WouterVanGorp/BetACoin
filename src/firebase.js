// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

import firebase from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhnO9kdLBzRoT9eKu_eWXqeZN2P2HBjDA",
  authDomain: "bet-a-coin.firebaseapp.com",
  projectId: "bet-a-coin",
  storageBucket: "bet-a-coin.appspot.com",
  messagingSenderId: "840637156471",
  appId: "1:840637156471:web:92a76a3dcd824b7fc54a72",
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
const auth = firebaseApp.auth();

export { auth, firebaseApp };
