// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3R17S5zJOElPvd1GhJQGHM4weIMUHKwc",
  authDomain: "ai-trip-planner-adbf2.firebaseapp.com",
  projectId: "ai-trip-planner-adbf2",
  storageBucket: "ai-trip-planner-adbf2.firebasestorage.app",
  messagingSenderId: "959362908893",
  appId: "1:959362908893:web:5031894e283d6868c89134",
  measurementId: "G-40YTKNQ93C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
