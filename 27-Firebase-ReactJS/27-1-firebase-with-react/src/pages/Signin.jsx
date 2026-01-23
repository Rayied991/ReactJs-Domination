/* eslint-disable no-unused-vars */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase";

const auth=getAuth(app);
const Signin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signInUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value=>console.log("Sign in success"))
        .catch((err)=>console.log(err))
    }
  return (
    <div className="signin-page">
        <h1>SignIn Page</h1>
        <label >Enter your Email</label>
        <input type="email" onChange={e=>setEmail(e.target.value)} 
        value={email}
        placeholder="Enter your email here" />

         <label >Enter your Password</label>
        <input type="password"
        onChange={e=>setPassword(e.target.value)}
        value={password}
        placeholder="Enter your Password here" />
    <button onClick={signInUser}>Sign In</button>
    </div>
  )
}

export default Signin