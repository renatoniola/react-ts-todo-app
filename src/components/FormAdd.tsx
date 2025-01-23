import { useState } from 'react';
import { useTodosContext } from '../state/todosContext';
import H1 from './H1';
import { getHighestId } from '../Services/Util';



function FormAdd() {

    const { todos, setTodos } = useTodosContext();

    function handleSubmit(e: any) {
        e.preventDefault();

        let titleStatus = form.title === '' ? true : false;
        let statusStatus = form.status === '' ? true : false;

        setBlur({...blurState, status: statusStatus, title: titleStatus});
        if(titleStatus || statusStatus) {
            return
        }

        let newTodos = [...todos, {...form, id: getHighestId(todos) + 1}];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    }

    const [form, setForm] = useState({
        title: "",
        status: ""
    });


    const [blurState, setBlur] = useState({
        'title': false,
        'status': false
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
        <>
            <H1>Add new todo </H1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <div> {blurState.title && <p>title is invalid</p>}</div>


                <label htmlFor="countries" className="block mb-2 mt-8 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select 
                    id="status"      
                    onChange={handleChange}
                    onBlur={handleInputBlur} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Select Status</option>
                    <option value="started">Started</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <div> {blurState.status && <p>title is invalid</p>}</div>

                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
            </form>
        </>
    )
}
export default FormAdd