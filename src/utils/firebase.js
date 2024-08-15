// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApxh_lTEkZEEI5OkViH4rf7YBvRCyTnLA",
  authDomain: "movieflixgpt-9da26.firebaseapp.com",
  projectId: "movieflixgpt-9da26",
  storageBucket: "movieflixgpt-9da26.appspot.com",
  messagingSenderId: "291590509891",
  appId: "1:291590509891:web:399c44852a9cd6029a4bf6",
  measurementId: "G-1K05M8X5V7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
