import React, { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addNewTask = () => {
        setTasks(t => [...t, task]);
        setTask('');
    }

    const handleTaskChange = (event) => {
        setTask(t => t = event.target.value);
    }

    const deleteTask = (index) => {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    const upTask = (index) => {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    const downTask = (index) => {
        if (index < tasks.length - 1) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    return (
        <div className='mainDiv'>
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text" 
                    value={task} 
                    onChange={handleTaskChange} 
                    placeholder='Task...' 
                    className='taskInput' />
                <button onClick={addNewTask} className='btns'>Add</button>
            </div>
            <ol>
                {
                    tasks.map((task, index) => 
                        <div className='listItemsDiv'>
                            <li key={index} >{task}</li>
                            <div>
                                <button 
                                    className='btns'
                                    onClick={() => deleteTask(index)} >Delete</button>
                                <button 
                                    className='btns'
                                    onClick={() => upTask(index)} >Up</button>
                                <button 
                                    className='btns'
                                    onClick={() => downTask(index)} >Down</button>
                            </div>
                        </div>
                    )
                }
            </ol>
        </div>
    )
}

export default Todo