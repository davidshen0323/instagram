// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlaGV0-oM76fxxNt1kqG5pW_bv4eY-K2A",
  authDomain: "instagram-project-b32b0.firebaseapp.com",
  projectId: "instagram-project-b32b0",
  storageBucket: "instagram-project-b32b0.appspot.com",
  messagingSenderId: "451211932236",
  appId: "1:451211932236:web:1ae13c35d500646b16bae9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
