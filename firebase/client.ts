// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXxLnlgdPTB1FgxuZgyii2cCFk6mcDnxQ",
    authDomain: "prepwise-9fa20.firebaseapp.com",
    projectId: "prepwise-9fa20",
    storageBucket: "prepwise-9fa20.firebasestorage.app",
    messagingSenderId: "327870684795",
    appId: "1:327870684795:web:ae24446620369f56594cde",
    measurementId: "G-85JHQ0XF8M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);