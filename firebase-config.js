// firebase.js - Configuration centrale Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDE4IZ6OdS4DnIJk61oopuILZc1Fx7wA6g",
  authDomain: "mepla-tv.firebaseapp.com",
  databaseURL: "https://mepla-tv-default-rtdb.firebaseio.com",
  projectId: "mepla-tv",
  storageBucket: "mepla-tv.firebasestorage.app",
  messagingSenderId: "1019186580961",
  appId: "1:1019186580961:web:84af8dc5d45d90376996a0",
  measurementId: "G-QPJ7ZF8F93"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

// Analytics optionnel (sécurisé pour le web)
export let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
