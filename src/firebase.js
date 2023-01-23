// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbVA5jgZzBem3z2p6x9nuNoQwAq-uL3B4",
    authDomain: "whatsappenin-df3e4.firebaseapp.com",
    projectId: "whatsappenin-df3e4",
    storageBucket: "whatsappenin-df3e4.appspot.com",
    messagingSenderId: "312660395904",
    appId: "1:312660395904:web:b1f7edc642eff8f9d9a365",
    measurementId: "G-ZSSP2KKMP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);