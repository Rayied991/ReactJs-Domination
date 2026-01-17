import { createContext, useState, type ReactNode } from "react";
// creating custom types
export type TodosProviderProps={
    // ReactNode is a generic type that covers a wide range of possible children types,
    // including JSX elements, strings and other React components.
    children: ReactNode;
}

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext={
    todos:Todo[];
    handleAddToDo:(task:string)=>void;
}
export const TodosContext=createContext<TodosContext | null>(null);

export const TodosProvider=({children}:TodosProviderProps)=>{
    const [todos,setTodos]=useState([]);
    const handleAddToDo=(task)=>{
        
    }


    return <TodosContext.Provider value={{todos,handleAddToDo}}>
        {children}
    </TodosContext.Provider>
}

