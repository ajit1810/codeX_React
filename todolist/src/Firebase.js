import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrWNUAsp6UN4nM5F1gtbvnq6Zur7Z2d6g",
    authDomain: "react-todolist-3d4b9.firebaseapp.com",
    projectId: "react-todolist-3d4b9",
    storageBucket: "react-todolist-3d4b9.appspot.com",
    messagingSenderId: "127129683002",
    appId: "1:127129683002:web:2ab0e468f624c956c4a103",
    measurementId: "G-Q81FQPG3DB",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};