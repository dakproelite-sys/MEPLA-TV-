// js/firebase-config.js

// Import des fonctions SDK Firebase nécessaires
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Votre configuration Firebase pour Mepla TV
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
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Exportation des instances pour les utiliser dans vos autres fichiers (connexion, index, profil-télévision, etc.)
export { app, auth, database, analytics };
