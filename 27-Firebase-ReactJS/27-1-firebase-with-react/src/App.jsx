import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase/firebase';

const db=getDatabase(app);
const App = () => {
  const putData=()=>{
    set(ref(db,'users/rayied'),{
      id:1,
      name:"rayied",
      age:26
    })
  };

  return (
    <div className="App">
      <h1>Firebase + React</h1>
      <button onClick={putData}>put data</button>
    </div>
  )
}

export default App