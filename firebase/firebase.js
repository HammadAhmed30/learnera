import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCqMWGFvctley78cKTtMK7x9emXxz_eYl8",
  authDomain: "learnera-b9051.firebaseapp.com",
  projectId: "learnera-b9051",
  storageBucket: "learnera-b9051.appspot.com",
  messagingSenderId: "681515898214",
  appId: "1:681515898214:web:de8bf26a1b455aa75ae4a7",
  measurementId: "G-B0B251K4HH"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)