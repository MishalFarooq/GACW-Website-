import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Storage import kiya

const firebaseConfig = {
  apiKey: "AIzaSyDq0CZop8j7bLmYNw3QNbtDJtvgRADSQbY", 
  authDomain: "gacw-chung-portal.firebaseapp.com",
  projectId: "gacw-chung-portal",
  storageBucket: "gacw-chung-portal.appspot.com",
  messagingSenderId: "1056580975619",
  appId: "1:1056580975619:web:910903322e72c845707cde"
};

const app = initializeApp(firebaseConfig);

// In dono ko export kiya taake baaki files mein use ho saken
export const db = getFirestore(app);
export const storage = getStorage(app);