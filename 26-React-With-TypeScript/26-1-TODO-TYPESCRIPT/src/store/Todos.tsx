import { createContext, useContext, useState, type ReactNode } from "react";
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
    handleAddToDo:(task:string)=>void;//call signature
}
export const TodosContext=createContext<TodosContext | null>(null);

export const TodosProvider=({children}:TodosProviderProps)=>{
    const [todos,setTodos]=useState<Todo[]>([]);
    const handleAddToDo=(task:string)=>{
        setTodos((prev)=>{
            const newTodos:Todo[]=[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                
                },
                ...prev
            ]

            // console.log("My previous data:",prev);
            // console.log("My new data:",newTodos);
            return newTodos;
        })
        
    }


    return <TodosContext.Provider value={{todos,handleAddToDo}}>
        {children}
    </TodosContext.Provider>
}



// consumer
export const useTodos=()=>{
    const todosConsumer=useContext(TodosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return  todosConsumer;
}