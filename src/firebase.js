// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHOrlU0GhUAobGXIuwCOkpovMs1Sp7pqQ",
  authDomain: "web-kelas-xii-ipa-2.firebaseapp.com",
  projectId: "web-kelas-xii-ipa-2",
  storageBucket: "web-kelas-xii-ipa-2.appspot.com",
  messagingSenderId: "570881824548",
  appId: "1:570881824548:web:579a9891890656610c05b1",
  measurementId: "G-XHSZPB6DSE"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
