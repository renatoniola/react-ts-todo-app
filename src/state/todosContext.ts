import { createContext, useContext } from 'react'
import { TodosContextType } from '../types/TodoType';

export const TodosContext = createContext<TodosContextType | null>(null);

export function useTodosContext() {

    const todos = useContext(TodosContext);

    if (todos === undefined) {
        throw new Error("unedefined todos");
    }

    return todos;
}
