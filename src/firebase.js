// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSKO0kGXQSvkmn-qb2N9oPv5AHckUVqc",
  authDomain: "nothing-8447e.firebaseapp.com",
  projectId: "nothing-8447e",
  storageBucket: "nothing-8447e.firebasestorage.app",
  messagingSenderId: "1010919033758",
  appId: "1:1010919033758:web:6ae55505de62d6be6f648f",
  measurementId: "G-ZHZG495JY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);