import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCi42qj4aRa6oIahnF5QHL7g01ZM0MMSCs",
  authDomain: "netmeds-c84ca.firebaseapp.com",
  projectId: "netmeds-c84ca",
  storageBucket: "netmeds-c84ca.appspot.com",
  messagingSenderId: "481743593378",
  appId: "1:481743593378:web:d676511bfdbbdc20f29cfb",
  measurementId: "G-GRVDP0NXY1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const  googleauth = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export const provider = new FacebookAuthProvider()