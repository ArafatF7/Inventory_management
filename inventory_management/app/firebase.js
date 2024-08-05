// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLt3FXGaysHM3o_X6To66PIPzP0hCG_1M",
  authDomain: "inventory-management-99547.firebaseapp.com",
  projectId: "inventory-management-99547",
  storageBucket: "inventory-management-99547.appspot.com",
  messagingSenderId: "717879087223",
  appId: "1:717879087223:web:407f206ad5da8980333672",
  measurementId: "G-Z6B4EX8YMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};