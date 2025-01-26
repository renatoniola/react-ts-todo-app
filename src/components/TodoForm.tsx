import { useEffect, useState } from 'react';
import { useTodosContext } from '../state/todosContext';
import { getHighestId } from '../Services/Util';
import H1 from './H1';
import TodoType from '../types/TodoType';

type Props = {
    selectedTodo: TodoType;
    onClose: () => void;
    typeForm: string
}

function NewTodo({ selectedTodo, onClose, typeForm }: Props) {

    const { todos, setTodos } = useTodosContext();

    useEffect(() => {

        if (selectedTodo) {
            setForm(selectedTodo);
        }

    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();

        let titleStatus = form.title === '' ? true : false;
        let statusStatus = form.status === '' ? true : false;
        let typeStatus = form.type === '' ? true : false;

        setBlur({ ...blurState, status: statusStatus, title: titleStatus, type: typeStatus });
        if (
            titleStatus ||
            statusStatus ||
            typeStatus
        ) {
            return
        }

        if (typeForm === 'new') {
            let newTodos = [...todos, { ...form, id: getHighestId(todos) + 1 }];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            setTodos(newTodos);
        }

        if (typeForm === 'edit') {
            const objIndex = todos.findIndex(( obj: TodoType)  => obj.id == selectedTodo.id);
            todos[objIndex] = form;

            localStorage.setItem("todos", JSON.stringify(todos));
            setTodos(todos);
            onClose();
        }
    }

    const [form, setForm] = useState({
        id: 0,
        title: "",
        status: "",
        type: "",
    });


    const [blurState, setBlur] = useState({
        'title': false,
        'status': false,
        'type': false,
    });

    function handleInputBlur(e: any) {

        setBlur({
            ...blurState,
            [e.target.id]: e.target.value === ''
        });

    }

    function handleChange(e: any) {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
        setBlur({
            ...blurState,
            [e.target.id]: e.target.value === ''
        });
    }

    return (
        <div id="crud-modal" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-items-center content-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-stone-600 bg-opacity-60">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-10">

                    <button onClick={onClose}>X</button>

                    <H1>{typeForm === 'new' ? 'Add new todo' : 'Edit Todo' }</H1>
                    <form onSubmit={handleSubmit}>
                        <input id="id" value={form.id} type="hidden"></input>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={form.title}
                            onChange={handleChange}
                            onBlur={handleInputBlur}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                        <div> {blurState.title && <p>title is invalid</p>}</div>


                        <label htmlFor="status" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select
                            id="status"
                            onChange={handleChange}
                            onBlur={handleInputBlur}
                            value={form.status}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Select Status</option>
                            <option value="started">Started</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <div> {blurState.status && <p>title is invalid</p>}</div>

                        <label htmlFor="type" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select
                            id="type"
                            onChange={handleChange}
                            onBlur={handleInputBlur}
                            value={form.type}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Select Type</option>
                            <option value="call">Phone call</option>
                            <option value="shopping">Shopping</option>
                        </select>
                        <div> {blurState.type && <p>type is invalid</p>}</div>

                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>

                    </form>
                </div>
            </div>
        </div>

    )
}
export default NewTodo
