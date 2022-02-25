// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu32HVzJD90VeQjsRbIX_ldO4LgVlBRh8",
  authDomain: "dormeal.firebaseapp.com",
  projectId: "dormeal",
  storageBucket: "dormeal.appspot.com",
  messagingSenderId: "946754546417",
  appId: "1:946754546417:web:fb4a40477a3a574a285750",
  measurementId: "G-7YTL6PXJ0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app