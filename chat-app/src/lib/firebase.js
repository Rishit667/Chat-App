import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyDjTC4KVEQmtEhxArOELVav9WUHaAR3erk",
  authDomain: "reactchat-89d6c.firebaseapp.com",
  projectId: "reactchat-89d6c",
  storageBucket: "reactchat-89d6c.firebasestorage.app",
  messagingSenderId: "290706752797",
  appId: "1:290706752797:web:730d01be5691c67428cdf4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);