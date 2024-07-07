// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "A",
  authDomain: "petm",
  databaseURL: "https://petapp-8752b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "petapp-8752b",
  storageBucket: "petapp-8752b.appspot.com",
  messagingSenderId: "616591002356",
  appId: "1",
  measurementId: "G-LEL72ZBBW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





export {app,auth};



