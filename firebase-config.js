import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Configuration Firebase officielle de MEPLA TV
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

// Exportation de la Realtime Database
export const database = getDatabase(app);
