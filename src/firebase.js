// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr5A5xOkXVsKo0Zhw6o0de50ymaT5dItU",
  authDomain: "twitter-clone-e4f49.firebaseapp.com",
  projectId: "twitter-clone-e4f49",
  storageBucket: "twitter-clone-e4f49.appspot.com",
  messagingSenderId: "1088298695935",
  appId: "1:1088298695935:web:8b4f614edbf8134a5020ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
