import React from 'react'
import TasksAPI from './api'
import './ShowData.css';


const ShowData= () => (
    
    <div>
        <h2>Show the Data</h2>

        <div className="taskdata">
            { JSON.stringify(TasksAPI.all()).toString() }
        </div>
        
    </div>
)

export default ShowData