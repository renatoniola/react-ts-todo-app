import H1 from './H1';
import Icon from './Icon';
import LinkIcon from './LinkIcon';
import { lazy, Suspense, useState } from 'react';
const NewTodo = lazy(() => import('./NewTodo'));

import { useTodosContext } from '../state/todosContext';
import TodoType from '../types/TodoType';



function Todos() {

    const { todos, setTodos } = useTodosContext();
    const [ showNewTodo, setShowNewTodo ] = useState(false);
    const [ selectedTodo, setSelectedTodo ] = useState(0);

    const removeTodo = (todoToRemove: number) => {

        const newTodos = todos.filter((todo: TodoType) => todo.id !== todoToRemove);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const editTodo = (todoItem: number) => {
        if ( todoItem !== 0) {
            setSelectedTodo(todoItem);
            setShowNewTodo(true);
        }
        
    }

    const closeModal = () => {
        setShowNewTodo(false);
    }

    return (
        <>

            <H1 className="">Todos:</H1>
            {showNewTodo &&
                <Suspense fallback={<span>loading</span>}>
                    <NewTodo selectedTodo={selectedTodo} onClick={closeModal}></NewTodo>
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
                                        <LinkIcon onClick={() => editTodo(item.id)} name="Edit">
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