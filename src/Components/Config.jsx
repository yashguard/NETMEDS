import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi42qj4aRa6oIahnF5QHL7g01ZM0MMSCs",
  authDomain: "netmeds-c84ca.firebaseapp.com",
  projectId: "netmeds-c84ca",
  storageBucket: "netmeds-c84ca.appspot.com",
  messagingSenderId: "481743593378",
  appId: "1:481743593378:web:d676511bfdbbdc20f29cfb",
  measurementId: "G-GRVDP0NXY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const googleauth = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
export const signout = () => {
  return auth.signOut();
};
export const emailauth = async (email, password) => {
  let userData = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userData.user)
  return userData.user.emailVerified
};
export const emailLogin =(email,password)=>{
  return signInWithEmailAndPassword(auth , email,password)
}
export const resetpass = async(email) => {
  return sendPasswordResetEmail(auth, email);
};
export const verification =async(email,password)=>{
  return sendEmailVerification(email)
}
