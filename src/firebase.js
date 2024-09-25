import { initializeApp } from "firebase/app";
import {
  collection,
    getFirestore,
    addDoc,
    onSnapshot,
    query
  
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
  return(result)
}
export const getNews=async(callback)=>{
  return onSnapshot(query(collection(db,"news")),(snapshot)=>{
    const news =snapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data(),
    }));
    callback(news)
  })
}

export { firestore };

