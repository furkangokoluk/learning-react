import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaIzSudLJidvqi-PtMWhCXinuGmYyA-as",
  authDomain: "fir-education-611d5.firebaseapp.com",
  projectId: "fir-education-611d5",
  storageBucket: "fir-education-611d5.firebasestorage.app",
  messagingSenderId: "96263841359",
  appId: "1:96263841359:web:81069c4b214399d1dd6c3a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 