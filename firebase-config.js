// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkpEKKs9GR8SNxZxTy3wgOsdu7Ywlouu4",
  authDomain: "tecpap-digital.firebaseapp.com",
  projectId: "tecpap-digital",
  storageBucket: "tecpap-digital.firebasestorage.app",
  messagingSenderId: "1085503988391",
  appId: "1:1085503988391:web:819f7cdfe0dffcc128b182"
};
// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter les services
export const auth = getAuth(app);
export const db = getFirestore(app);
