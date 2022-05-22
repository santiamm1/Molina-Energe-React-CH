// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-vScAh8EnRlLR2ie0ZtWUrjm03E3UXpM",
  authDomain: "molina-energe-ch-react-929d1.firebaseapp.com",
  projectId: "molina-energe-ch-react-929d1",
  storageBucket: "molina-energe-ch-react-929d1.appspot.com",
  messagingSenderId: "1063146894220",
  appId: "1:1063146894220:web:4aadda8ee7a8f547e31ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);