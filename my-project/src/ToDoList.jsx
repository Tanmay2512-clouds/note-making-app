import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["eat", "shower", "walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const UpdateTasks = tasks.filter((_, i) => i !== index);
        setTasks(UpdateTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const UpdatedTasks = [...tasks]; // Semicolon here prevents syntax parsing errors
            
            // Correct ES6 array element swapping syntax
            [UpdatedTasks[index], UpdatedTasks[index - 1]] = 
            [UpdatedTasks[index - 1], UpdatedTasks[index]];
            
            setTasks(UpdatedTasks);
        }
    }

    function moveTaskDown(index) {
        // Condition changed from '>' to '<' to ensure it's not the last item
        if (index < tasks.length - 1) {
            const UpdatedTasks = [...tasks]; // Semicolon here prevents syntax parsing errors
            
            // Correct ES6 array element swapping syntax
            [UpdatedTasks[index], UpdatedTasks[index + 1]] = 
            [UpdatedTasks[index + 1], UpdatedTasks[index]];
            
            setTasks(UpdatedTasks);
        }
    }

    return (
        <div className='To-do-list'>
            <h1>To Do List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter a task ...' 
                    value={newTask} 
                    onChange={handleInputChange} 
                />
                <button className='add-button' onClick={addTask}> Add a Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete the task</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;