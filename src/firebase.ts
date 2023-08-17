// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Ren3xNCVkdem7Yo4ASXQuyWmvaAyTWU",
  authDomain: "e-commerce-store-36afb.firebaseapp.com",
  databaseURL:
    "https://e-commerce-store-36afb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-store-36afb",
  storageBucket: "e-commerce-store-36afb.appspot.com",
  messagingSenderId: "308957935727",
  appId: "1:308957935727:web:7d37135621f2c94d72f59a",
  measurementId: "G-HHM14WPLX5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
