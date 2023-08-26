// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYguYpZAuQO2wghg_SRv-iwfJ5Qfvatzk",
    authDomain: "react-blog-bac9f.firebaseapp.com",
    projectId: "react-blog-bac9f",
    storageBucket: "react-blog-bac9f.appspot.com",
    messagingSenderId: "338409842327",
    appId: "1:338409842327:web:de1561ea31c36af1e2abd2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();