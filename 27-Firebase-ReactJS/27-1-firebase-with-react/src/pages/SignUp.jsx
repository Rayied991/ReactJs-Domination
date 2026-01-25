 
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { app } from "../firebase/firebase";


const auth=getAuth(app);
const db = getDatabase(app);
const googleProvider=new GoogleAuthProvider();

const SignUp = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=>{
           // Optionally store user data in Realtime Database
           set(ref(db,"users/"+ value.user.uid),{
            email:value.user.email,
            createdAt: new Date().toISOString(),
            provider: "email"
           });
           alert("success");
        })
        .catch(err=>console.log(err));
    }

    const signupWIthGoogle=()=>{
      signInWithPopup(auth,googleProvider)
      .then((result)=>{
        // Signed-in user info
        const user=result.user;

         // Optionally store user data in Realtime Database
         set(ref(db,"users/"+user.uid),{
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    provider: 'google',
                    createdAt: new Date().toISOString()
         })
         .then(() => console.log("User data saved to database"))
                .catch(err => console.error("Error saving to database:", err));

                console.log("Google sign-in successful");
      })
      .catch((error) => {
                console.error("Error:", error.code, error.message);
            });
     
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