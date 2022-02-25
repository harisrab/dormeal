// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "dormeal.firebaseapp.com",
	projectId: "dormeal",
	storageBucket: "dormeal.appspot.com",
	messagingSenderId: "946754546417",
	appId: "1:946754546417:web:687372bc09d16d80285750",
	measurementId: "G-RGHSP3THWY",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
