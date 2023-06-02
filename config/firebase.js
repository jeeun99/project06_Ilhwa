import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBicXsrqDiVZOnYcgWehRvfGrE-5FeKjts",
  authDomain: "ilhwaapp.firebaseapp.com",
  projectId: "ilhwaapp",
  storageBucket: "ilhwaapp.appspot.com",
  messagingSenderId: "281727649562",
  appId: "1:281727649562:web:428c9dbc1dc956ed544ea3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
