// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Kl7Q5Cyc8c1cAiCFPW5yUEgrOEoWJ0U",
  authDomain: "stardb-2e2b1.firebaseapp.com",
  projectId: "stardb-2e2b1",
  storageBucket: "stardb-2e2b1.appspot.com",
  messagingSenderId: "797188490294",
  appId: "1:797188490294:web:22d254cdbee36e537c0497",
  measurementId: "G-VD0L8285F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;