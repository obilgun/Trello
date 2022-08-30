import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3GJdA9BNnRdJL6idMQP5XNNhkGEXkMfs",
  authDomain: "trello9.firebaseapp.com",
  projectId: "trello9",
  storageBucket: "trello9.appspot.com",
  messagingSenderId: "428275233066",
  appId: "1:428275233066:web:a2e9d5054eab120bc4ae53",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
