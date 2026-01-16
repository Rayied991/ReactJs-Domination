import { useState, type FormEvent } from "react";

const AddToDo = () => {
    const [todo,setTodo]=useState("");

    const handleFormSubmit=(e:FormEvent<HTMLElement>)=>{
        e.preventDefault();
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo;