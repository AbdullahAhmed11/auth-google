// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0QKW5X8U0FXj6VCF6eKPaFaRYUp8TMb0",
  authDomain: "form-app-fec1c.firebaseapp.com",
  projectId: "form-app-fec1c",
  storageBucket: "form-app-fec1c.appspot.com",
  messagingSenderId: "649141461143",
  appId: "1:649141461143:web:566422d987acbe0102c9d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
