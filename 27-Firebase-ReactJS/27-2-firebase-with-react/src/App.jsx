import { useState } from 'react';
import './App.css';
import { useFirebase } from './context/Firebase';

function App() {

  //custom hook
  const firebase=useFirebase();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // console.log(firebase);


  return(
    <div className="App">
      <h1>Firebase + React</h1>
      <input type="email"
      onChange={e=>setEmail(e.target.value)}
      value={email}
      placeholder='Enter email' />
      <input type="text"
      onChange={e=>setPassword(e.target.value)}
      value={password}
      placeholder='Enter password' />
      <button onClick={()=>{firebase.signupUserWithEmailAndPassword(email,password);
        firebase.putData("users/" + "rayd",{email,password})
      }}>SignUp</button>
    </div>
  ) 
}

export default App
