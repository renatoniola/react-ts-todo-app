import { createContext, useContext } from 'react'
import TodoType from '../types/TodoType';

type TodosContextType = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodosContext = createContext<TodosContextType | null>(null);

export function useTodosContext() {
    
    const todos = useContext(TodosContext);

    if (todos === undefined) {
        throw new Error("unedefined todos");
    }

    return todos;
}
