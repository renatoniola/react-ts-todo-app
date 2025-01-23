import H1 from './H1';
import Icon from './Icon';
import LinkIcon from './LinkIcon';

import { useTodosContext } from '../state/todosContext';
import TodoType from '../types/TodoType';

function Todos() {

    const headers = ['Todo', 'Status', 'Actions'];
    const { todos, setTodos } = useTodosContext();

    const removeTodo = (todoToRemove: number) => {
       console.log('todoToRemove: ', todoToRemove);
    }

    return (
        <>

            <H1 className="">Todos:</H1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3"></th>
                            {headers.map((item) => {
                                return <th scope="col" className="px-6 py-3">
                                    {item}
                                </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>

                        {todos && todos.map((item: TodoType) => {
                            return (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4 w-2">
                                        <Icon type={item.icon || 'moon'}></Icon>
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.status}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end">
                                        <LinkIcon onClick={() => removeTodo(item.id) } name="Edit">
                                            <Icon type="edit"></Icon>
                                        </LinkIcon>
                                        <LinkIcon onClick={() => removeTodo(item.id) } name="Delete">
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