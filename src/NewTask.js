import React from 'react'
import './NewTask.css';

const NewTask = () => (
    <section className="col">
        <fieldset>
            <legend>Create a new task</legend>
            <div>
                <label for="taskTitle">Title:</label>
                <input type="text" id="taskTitle"></input>
            </div>
            <div>
                <label for="taskDueDate">Due Date:</label>
                <input type="date" id="taskDueDate" min="" max="" value=""></input>
            </div>
            <div>
                <label for="taskPriority">Priority (5 highest):</label>
                <input type="range" id="taskPriority" min="1" max="5" step="1"></input>
            </div>
            <div>
                <textarea id="taskDescription" rows="10" cols="30">Enter task description...</textarea><br />
            </div>
            <div>
                <button>Add Task</button>
            </div>
        </fieldset>
    </section>
)
export default NewTask