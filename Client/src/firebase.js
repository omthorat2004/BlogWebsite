// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD171DLgsRwGHcmrvjat9PJmXBmcuwDDm8",
  authDomain: "blogproject-5f668.firebaseapp.com",
  projectId: "blogproject-5f668",
  storageBucket: "blogproject-5f668.appspot.com",
  messagingSenderId: "376093542285",
  appId: "1:376093542285:web:64c04e3c00d7276aa11fc4",
  measurementId: "G-9JXNZQ15RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);