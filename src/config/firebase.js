// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnN1ejweKu889eu1-CEqgw0WtH0khC_pA",
  authDomain: "music-personality-test.firebaseapp.com",
  databaseURL: "https://music-personality-test-default-rtdb.firebaseio.com",
  projectId: "music-personality-test",
  storageBucket: "music-personality-test.appspot.com",
  messagingSenderId: "693809973731",
  appId: "1:693809973731:web:bae9999826e6fab1af78d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);