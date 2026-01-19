/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase/firebase';
import SignUp from './pages/SignUp';

const auth=getAuth(app);
const db=getDatabase(app);
const App = () => {
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

  return (
    <div className="App">
      <h1>Firebase + React</h1>
      <button onClick={putData}>put data</button>
      {/* <button onClick={signupUser}>Create User</button> */}
      <SignUp/>
    </div>
  )
}

export default App