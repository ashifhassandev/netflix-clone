import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXfqibGGSaAayj3TMzL2E-hBF3sf0lOyI",
  authDomain: "netflix-clone-6b48b.firebaseapp.com",
  projectId: "netflix-clone-6b48b",
  storageBucket: "netflix-clone-6b48b.firebasestorage.app",
  messagingSenderId: "406878081074",
  appId: "1:406878081074:web:81349cc60f3b5c2927ec2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
};