// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
    getFirestore,
    addDoc
  
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL4KRT9GsbnVIJ6eJWFTiVMmdjBMsbu2I",
  authDomain: "dalamannews.firebaseapp.com",
  projectId: "dalamannews",
  storageBucket: "dalamannews.appspot.com",
  messagingSenderId: "696435176532",
  appId: "1:696435176532:web:02387bc96e5fae560969c1",
  measurementId: "G-25B2JJ9ZNK"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const db = getFirestore(app);

export const addNews=async(data)=>{
  const result = await addDoc(collection(db,"news"),data)
}


export { firestore };

