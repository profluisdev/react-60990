
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBi_iF7wdbnYZi6u8Q6kc1iHaTHMmAxIv0",
  authDomain: "coder-60990.firebaseapp.com",
  projectId: "coder-60990",
  storageBucket: "coder-60990.appspot.com",
  messagingSenderId: "873282407107",
  appId: "1:873282407107:web:b175e0f38b90c7fdcdb076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);