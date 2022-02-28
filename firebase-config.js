// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD6zJrdNqG59wzBiv66UuGnkUI9rVEpr7A",
	authDomain: "dormeal-3.firebaseapp.com",
	projectId: "dormeal-3",
	storageBucket: "dormeal-3.appspot.com",
	messagingSenderId: "387557553917",
	appId: "1:387557553917:web:ae5df0067f0bcccae67094",
	measurementId: "G-G0Z9NGLK3C",
};

let app;



// Initialize Firebase
if (getApps().length !== 0) {
	app = getApp();
} else {
	app = initializeApp(firebaseConfig);
}

const data_base = getFirestore(app);
const auth = getAuth(app);

export default app;
export { auth, data_base };