// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBE9vUld_gvDNVFel6Fp3rTPg8Sr0t3g",
  authDomain: "netflix-gpt-58835.firebaseapp.com",
  projectId: "netflix-gpt-58835",
  storageBucket: "netflix-gpt-58835.appspot.com",
  messagingSenderId: "277847044831",
  appId: "1:277847044831:web:bcac5d530d87c29485ef6a",
  measurementId: "G-RRZ8R8M2RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
