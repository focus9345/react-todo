import React from 'react'
import TasksAPI from './api'

import { Link } from 'react-router-dom'

const Home = () => (
    
    <div>
        <h2>Tasks</h2>

        <ul className="taskmenu">
            {
                TasksAPI.all().map(t => (
                    <li key={t.key}>
                        <Link to={`/details/${t.key}`}>{t.text}</Link>
                    </li>
                ))
            }
        </ul>
        <div className="newTask">
            <Link to='/todo'>Add Task</Link>
        </div> 
    </div>
)

export default Home