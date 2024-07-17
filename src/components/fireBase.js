import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Correct import for the full Firestore SDK

const firebaseConfig = {
    apiKey: "AIzaSyCWPb61EQPEn2cDU33EEQ8BUG1nfYFlYXo",
    authDomain: "mypersonalportfolio19.firebaseapp.com",
    databaseURL: "https://mypersonalportfolio19-default-rtdb.firebaseio.com",
    projectId: "mypersonalportfolio19",
    storageBucket: "mypersonalportfolio19.appspot.com",
    messagingSenderId: "720394661668",
    appId: "1:720394661668:web:9eceffac572fb48d42cdb1",
    measurementId: "G-2NJ433L3CH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
