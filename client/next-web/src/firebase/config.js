// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4FkhGj9CJUYWwygZ4wrw_WdVZ938pD00",
  authDomain: "fiery-set-426610-g5.firebaseapp.com",
  projectId: "fiery-set-426610-g5",
  storageBucket: "fiery-set-426610-g5.appspot.com",
  messagingSenderId: "129273955185",
  appId: "1:129273955185:web:3ff8cd5ce103099a5a6cd0",
  measurementId: "G-Z8WWEBH8PP"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export default firebase_app;
