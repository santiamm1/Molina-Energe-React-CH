
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBsmVZSjnlebQGxoJ35gj6ZBTfwKVIDV4",
  authDomain: "energe-molina.firebaseapp.com",
  projectId: "energe-molina",
  storageBucket: "energe-molina.appspot.com",
  messagingSenderId: "423787600439",
  appId: "1:423787600439:web:c14d78790d95ca6ba87db2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);