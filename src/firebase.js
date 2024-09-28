// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxGWHSJN9D7wREXCn7iHG3SVe2kbohURM",
    authDomain: "gurdians.firebaseapp.com",
    projectId: "gurdians",
    storageBucket: "gurdians.appspot.com",
    messagingSenderId: "613530012316",
    appId: "1:613530012316:web:bfbeb630b297ddad0f3b59"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);