// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKGZRxqG6f1U-SD34Pa1mHJubJ9oaV3qo",
  authDomain: "coderhouse-ecommerce-37b34.firebaseapp.com",
  projectId: "coderhouse-ecommerce-37b34",
  storageBucket: "coderhouse-ecommerce-37b34.appspot.com",
  messagingSenderId: "1036872795287",
  appId: "1:1036872795287:web:cd8cd23e0a2531466215d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
