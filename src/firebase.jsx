// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { collection, doc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_KEY",
// Default  apiKey: "AIzaSyDY9RW-JwYUeDzidkZdvv9uCbk7NxDbCgQ",
  authDomain: "store-tutorial-799fd.firebaseapp.com",
  projectId: "store-tutorial-799fd",
  storageBucket: "store-tutorial-799fd.appspot.com",
  messagingSenderId: "671514694903",
  appId: "1:671514694903:web:7a7e389ea92934afbdaff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const newCityRef = doc(collection(db, "cities"));