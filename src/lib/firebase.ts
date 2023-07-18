import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAsgwyqCvv86wx_xcjT9k2H5uy-sxl2f-E",
    authDomain: "link-root.firebaseapp.com",
    projectId: "link-root",
    storageBucket: "link-root.appspot.com",
    messagingSenderId: "903711819655",
    appId: "1:903711819655:web:6027c31d342ce2eb753522",
    measurementId: "G-K57V43H615"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();