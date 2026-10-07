// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyALAfQ7NumMkuMRNZvd87mqN76dc-FZzNc",
    authDomain: "creatingusingreal-timeapis.firebaseapp.com",
    databaseURL: "https://creatingusingreal-timeapis-default-rtdb.firebaseio.com",
    projectId: "creatingusingreal-timeapis",
    storageBucket: "creatingusingreal-timeapis.firebasestorage.app",
    messagingSenderId: "433304636844",
    appId: "1:433304636844:web:6feb6f5d69785d9107fe09",
    measurementId: "G-R427EQ3TW6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

