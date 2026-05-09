// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";


// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGzp-IPgj8ba__n1QgS1w4V68VsTeXwcI",
  authDomain: "budgetvault-20478.firebaseapp.com",
  projectId: "budgetvault-20478",
  storageBucket: "budgetvault-20478.firebasestorage.app",
  messagingSenderId: "364607522830",
  appId: "1:364607522830:web:2e1cc6e9dc49b573d3145f",
  measurementId: "G-6WTCR9648Z"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
const db = getFirestore(app);


// Export Everything
export {
  db,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
  getDoc
};