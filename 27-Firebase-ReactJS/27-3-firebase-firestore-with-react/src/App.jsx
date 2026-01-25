import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { app } from "./Firebase/firebase.js";
const firestoredb=getFirestore(app);
const App = () => {
  const writeData=async()=>{
  const result=await addDoc(collection(firestoredb,'cities'),{
      name:'Dhaka',
      pinCode:1234,
      lat: 123,
      long:456
    });
    console.log("Result= ",result);
  }

  const makeSubCollection=async()=>{
    await addDoc(collection(firestoredb,"cities/urDuHSu1d8kxKwGj8OH8/places"),{
      name:"Old Dhaka",
      desc:"dhaka city",
      date: Date.now()
    });
  };

  const getDocument=async()=>{
    const ref=doc(firestoredb,'cities','urDuHSu1d8kxKwGj8OH8');
    const snap=await getDoc(ref);
    console.log(snap.data());
  }

  const getDocuments=async()=>{
    const collectionRef=collection(firestoredb,'users');
    const q=query(collectionRef,where('isMale', "==",true));
    const snapshot=await getDocs(q);

    snapshot.forEach(data=>console.log(data.data()));
  }


  const update=async()=>{
    const docRef=doc(firestoredb,"cities","urDuHSu1d8kxKwGj8OH8");
   await updateDoc(docRef,{
      name:"Sylhet"
    })
  }
  
  return (
    <div className="App">
      <h1>Firebase FireStore</h1>
      <button onClick={writeData}>Put data</button>
      <button onClick={makeSubCollection}>Put Sub data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocuments}>Get Document by Query</button>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default App