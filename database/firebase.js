// database/firebaseDb.js
//import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "XXXXXXX",
    authDomain: "XXXXXXX.firebaseapp.com",
    databaseURL: "https://CXXXXXXXXX.firebaseapp.com",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXX.appspot.com",
    messagingSenderId: "111111111111",
    appId: "1:11111111111:web:d47035daff047f6c37cf9f"
};
// 1. Initialize the APplication based on Configuration
const app = initializeApp(firebaseConfig);
// 2. Set the Auth Process (Register, Login, and SignOut) for the current App
const firebase = getAuth(app);




// firebase.initializeApp(firebaseConfig);
export default firebase;
