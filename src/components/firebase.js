// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDATB6DLjY-0uDgmZCI-1JvGWVMJrmm0Wg",
  authDomain: "molina-energe-ch-react.firebaseapp.com",
  projectId: "molina-energe-ch-react",
  storageBucket: "molina-energe-ch-react.appspot.com",
  messagingSenderId: "286085486357",
  appId: "1:286085486357:web:a527dac7c8f5a611e27b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);