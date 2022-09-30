import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)
    const handleSubmit = (function (e) {
        e.preventDefault();
        createTask({ title, description })
        setTitle('')
        setDescription('')
    })



    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h2 className='text-2xl text-white font-bold mb-3'>Agrega la tarea</h2>
                <input placeholder="escriba su tarea"
                    onChange={function (e) { setTitle(e.target.value) }}
                    value={title}
                    autoFocus
                    className='bg-slate-300 p-3 w-full mb-2'
                />
                <textarea placeholder="escriba la descripcion"
                    onChange={function (e) { setDescription(e.target.value) }}
                    value={description}
                    className='bg-slate-300 p-3 w-full mb-2'
                ></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white rounded-md mt-4 hover:bg-indigo-300'>
                    guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm