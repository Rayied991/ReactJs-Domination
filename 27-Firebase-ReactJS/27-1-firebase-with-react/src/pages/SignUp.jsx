/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase";


const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(value=>alert("Success"));
    }


    const signupWIthGoogle=()=>{
      signInWithPopup(auth,googleProvider);
    }
  return (
    <div className="signup-page">
      <h1>SignUp Page</h1>
        <label >Email:</label>
        <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email here" />
        <label >Password:</label>
        <input onChange={e=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password here" />
       <br />
       <button onClick={signupWIthGoogle}>Sign in With Google</button>
        <button onClick={createUser}>Sign Up</button>
    </div>
  )
}

export default SignUp;