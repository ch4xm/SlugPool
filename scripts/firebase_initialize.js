//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "slugpool-cruzhacks24.firebaseapp.com",
  projectId: "slugpool-cruzhacks24",
  storageBucket: "slugpool-cruzhacks24.appspot.com",
  messagingSenderId: "1057846058539",
  appId: "1:1057846058539:web:0c8ccc6e592fa1fe0fd46e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);