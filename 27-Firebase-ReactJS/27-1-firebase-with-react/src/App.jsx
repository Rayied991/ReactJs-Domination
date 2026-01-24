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
        setUser(user);
      }
      else{
        console.log("Logged out");
        setUser(null);
      }
    })
  },[]);

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

    return (
    <div className="App">
      {/* <h1>Firebase + React</h1>
      <button onClick={putData}>put data</button> */}
      {/* <button onClick={signupUser}>Create User</button> */}
      <h1>Hello {user.email}</h1>
    <button onClick={()=> signOut(auth)}></button>
      <Signin/>
    </div>
  )


}

export default App;