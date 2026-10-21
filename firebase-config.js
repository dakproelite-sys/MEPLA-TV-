// ======================================================
// MEPLA TV — CONFIGURATION FIREBASE
// Fichier : firebase-config.js
// ======================================================

import {
    initializeApp,
    getApps,
    getApp
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// ======================================================
// 1. CONFIGURATION OFFICIELLE DE MEPLA TV
// ======================================================

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

// ======================================================
// 2. INITIALISATION DE FIREBASE
// ======================================================

const app = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

// ======================================================
// 3. AUTHENTIFICATION
// ======================================================

const auth = getAuth(app);

// ======================================================
// 4. BASE DE DONNÉES REALTIME DATABASE
// ======================================================

const db = getDatabase(app);

// ======================================================
// 5. EXPORTATION DES SERVICES ET FONCTIONS
// ======================================================

export {
    app,
    auth,
    db,

    // Authentification
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,

    // Base de données
    ref,
    set,
    get,
    child,
    update,
    push,
    onValue,
    remove
};

// ======================================================
// FIN DE LA CONFIGURATION MEPLA TV
// ======================================================