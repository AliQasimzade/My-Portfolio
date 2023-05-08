import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyC0tMX8HcopVgtkJ0jRdP6RbbNPBGnOur8",
  authDomain: "notifications-981bb.firebaseapp.com",
  projectId: "notifications-981bb",
  storageBucket: "notifications-981bb.appspot.com",
  messagingSenderId: "571033028219",
  appId: "1:571033028219:web:988dedc1bc45e85a87c4de"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;