// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTWrEu3OLjHQYsFrGl83zAYws-QijQMN4",
  authDomain: "nydf-web.firebaseapp.com",
  projectId: "nydf-web",
  storageBucket: "nydf-web.appspot.com",
  messagingSenderId: "625199345281",
  appId: "1:625199345281:web:986e129a90b2d6e346a780",
  measurementId: "G-90W2BFEY42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
