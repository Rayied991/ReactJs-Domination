/* eslint-disable react-refresh/only-export-components */
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { createContext, useContext } from "react";
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

    const signupUserWithEmailAndPassword=(email,password)=>{
    return createUserWithEmailAndPassword(FirebaseAuth,email,password);
    }

    const putData=(key,data)=>{

        set(ref(database,key),data);
    }
    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putData}}>
           {props.children} 
        </FirebaseContext.Provider>
    )
};