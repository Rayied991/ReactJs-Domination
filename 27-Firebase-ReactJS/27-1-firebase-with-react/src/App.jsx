/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { app } from './firebase/firebase';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

const auth=getAuth(app);
const db=getDatabase(app);
const App = () => {
  const [user,setUser]=useState(null);
  const putData=()=>{
    set(ref(db,'users/rayied'),{
      id:1,
      name:"rayied",
      age:26
    })
  };
  const signupUser=()=>{
    createUserWithEmailAndPassword(auth,'raydev@gmail.com','123456').then(value=>console.log(value));
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        // logged in
        console.log("User logged in:", user); // Debug: check what's in user object
        setUser(user);
      }
      else{
        console.log("Logged out");
        setUser(null);
      }
    });
  },[]);

   // When user is NOT logged in, show SignUp and SignIn
  if(user==null){
  return (
    <div className="App">
      {/* <h1>Firebase + React</h1>
      <button onClick={putData}>put data</button> */}
      {/* <button onClick={signupUser}>Create User</button> */}
      <SignUp/>
      <Signin/>
    </div>
  )
  }

   // When user IS logged in, show welcome message and logout button
    return (
    <div className="App">
      {/* <h1>Firebase + React</h1>
      <button onClick={putData}>put data</button> */}
      {/* <button onClick={signupUser}>Create User</button> */}
      <h1>Hello {user.email || user.displayName || "User"}</h1>
      <button onClick={() => signOut(auth)}>LogOut</button>
    </div>
  )
}

export default App;