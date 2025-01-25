type TodoType = {
    id: number;
    type: string;
    title: string;
    status: string;
}

export default TodoType

export type TodosContextType = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}