/* eslint-disable react-refresh/only-export-components */
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL:import.meta.env.VITE_databaseURL
};
const FirebaseApp=initializeApp(firebaseConfig);
const database=getDatabase(FirebaseApp);
const FirebaseAuth=getAuth(FirebaseApp);
const FirebaseContext=createContext(null);


// custom Hook
export const useFirebase=()=>{
   return useContext(FirebaseContext );
}

export const FirebaseProvider=(props)=>{

    const [name,setName]=useState("");

    const signupUserWithEmailAndPassword=(email,password)=>{
    return createUserWithEmailAndPassword(FirebaseAuth,email,password);
    }

    const putData=(key,data)=>{

        set(ref(database,key),data);
    }
// get(child(ref(database),'grandfather')).then(snapshot=>console.log(snapshot.val()));
    // get(child(ref(database),'grandfather/father')).then(snapshot=>console.log(snapshot.val()));


    useEffect(()=>{
    onValue(ref(database,'grandfather/father/child'),(snapshot)=>setName(snapshot.val().name));
    },[]);
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
            <h3>Name is :{name}</h3>
           {props.children} 
        </FirebaseContext.Provider>
    )
};