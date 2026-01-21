 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDcxUOOZAabPcvqilejFrmKyzIkX0xgmk4",
  authDomain: "mi-proyecto-react-dfe6d.firebaseapp.com",
  projectId: "mi-proyecto-react-dfe6d",
  storageBucket: "mi-proyecto-react-dfe6d.firebasestorage.app",
  messagingSenderId: "576443818241",
  appId: "1:576443818241:web:6ce50bd767ac29cd35fb00"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
