import H1 from './H1';
import Icon from './Icon';
import LinkIcon from './LinkIcon';
import { lazy, Suspense, useState } from 'react';
const TodoForm = lazy(() => import('./TodoForm'));

import { useTodosContext } from '../state/todosContext';
import TodoType from '../types/TodoType';



function Todos() {

    const { todos, setTodos } = useTodosContext();
    const [showNewTodo, setShowNewTodo] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});
    const [typeForm, setTypeForm] = useState({});

    const removeTodo = (todoToRemove: number) => {

        const newTodos = todos.filter((todo: TodoType) => todo.id !== todoToRemove);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const showTodoForm = (todoItem: number | null, typeForm: string) => {
        setTypeForm(typeForm);

        if (todoItem) {
            const todo = todos.filter((todo: TodoType) => todo.id === todoItem)
            setSelectedTodo(todo[0]);
        }
        setShowNewTodo(true);

    }

    const closeModal = () => {
        setSelectedTodo({});
        setShowNewTodo(false);
    }

    return (
        <>

            <H1 className="">Todos:</H1>
            <button onClick={() => showTodoForm(null, 'new')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Todo</button>
            {showNewTodo &&
                <Suspense fallback={<span>loading</span>}>
                    <TodoForm selectedTodo={selectedTodo} onClose={closeModal} typeForm={typeForm}></TodoForm>
                </Suspense>
            }
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3">Todo</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="pl-6 pr-9 py-3 text-right">Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {todos && todos.map((item: TodoType) => {
                            return (
                                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4 w-2">
                                        <Icon type={item.type}></Icon>
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.status}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end">
                                        <LinkIcon onClick={() => showTodoForm(item.id, 'edit')} name="Edit">
                                            <Icon type="edit"></Icon>
                                        </LinkIcon>
                                        <LinkIcon onClick={() => removeTodo(item.id)} name="Delete">
                                            <Icon type="delete"></Icon>
                                        </LinkIcon>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Todos