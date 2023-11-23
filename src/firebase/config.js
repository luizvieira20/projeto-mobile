import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDceMXF5u2_k1w2iRkNWeHFnfarevnB2cA",
  authDomain: "satisfyingyou-c3a07.firebaseapp.com",
  projectId: "satisfyingyou-c3a07",
  storageBucket: "satisfyingyou-c3a07.appspot.com",
  messagingSenderId: "52045234049",
  appId: "1:52045234049:web:32ae46a9897c7af5243280"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth_mod = getAuth(app);
const storage = getStorage(app);

export {storage};
export{auth_mod};
export {db};