// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXKORIBNkp-9TKku2QwTI7He1PcUqk_ss",
  authDomain: "fir-project-60a5c.firebaseapp.com",
  projectId: "fir-project-60a5c",
  storageBucket: "fir-project-60a5c.firebasestorage.app",
  messagingSenderId: "1065629107721",
  appId: "1:1065629107721:web:466517f09751367b0f1ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);