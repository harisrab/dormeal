// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "dormeal-new.firebaseapp.com",
  	projectId: "dormeal-new",
  	storageBucket: "dormeal-new.appspot.com",
  	messagingSenderId: "449761113620",
  	appId: "1:449761113620:web:9d4cb29832abca5fd75901",
  	measurementId: "G-V2X0Q6NVLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
