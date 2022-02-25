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
	messagingSenderId: process.env.FIREBASE_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: "G-RGHSP3THWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
