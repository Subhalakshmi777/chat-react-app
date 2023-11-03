// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc1mbAOuVdHsffaIDxNeeCCFcpRqnZ_W8",
  authDomain: "react-chat-fda9d.firebaseapp.com",
  projectId: "react-chat-fda9d",
  storageBucket: "react-chat-fda9d.appspot.com",
  messagingSenderId: "491102744151",
  appId: "1:491102744151:web:dfdc5030b92aa88641fd12",
  measurementId: "G-WP49DC64QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);