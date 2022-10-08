
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtksl07TiAfU8PbwcTE_qQz5y94OaSA4s",
  authDomain: "my-chat-306d9.firebaseapp.com",
  projectId: "my-chat-306d9",
  storageBucket: "my-chat-306d9.appspot.com",
  messagingSenderId: "290965701705",
  appId: "1:290965701705:web:2c47357a385ed9486a2b98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
