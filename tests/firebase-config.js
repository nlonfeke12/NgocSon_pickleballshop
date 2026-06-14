// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js"
import {
    collection,
    addDoc,
    getDocs
} from
"https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMR4DZA6KUgPzUHvl8uY5HTQ3Q9yDnqcc",
    authDomain: "spck-566d5.firebaseapp.com",
    projectId: "spck-566d5",
    storageBucket: "spck-566d5.firebasestorage.app",
    messagingSenderId: "909618189535",
    appId: "1:909618189535:web:2df1f5a30d72c1190f056a",
    measurementId: "G-WK5SR8Q2WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);