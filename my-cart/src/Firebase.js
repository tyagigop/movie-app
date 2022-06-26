import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
   apiKey: "AIzaSyAXkIJlkrm8iNqB-TVYg1NgR3A8u7g_lAY",
  authDomain: "cart-6dc7b.firebaseapp.com",
  projectId: "cart-6dc7b",
  storageBucket: "cart-6dc7b.appspot.com",
  messagingSenderId: "646910053988",
  appId: "1:646910053988:web:42e91a4dc25bf4b0401971"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();