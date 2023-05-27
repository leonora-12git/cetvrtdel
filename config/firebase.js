// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8GM7Uhgu953-1Kuk8bWirSIrZ3YV2Pfo",
  authDomain: "event-planner-7514c.firebaseapp.com",
  projectId: "event-planner-7514c",
  storageBucket: "event-planner-7514c.appspot.com",
  messagingSenderId: "493811473479",
  appId: "1:493811473479:web:3e473e45182a3cbdf3a562",
  measurementId: "G-D0W72T4FD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);