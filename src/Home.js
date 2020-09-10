import React from 'react'
import TasksAPI from './api'
import { Link } from 'react-router-dom'

const Home = () => (
    
    <div>
        <h2>Tasks</h2>
        <ul className="taskmenu">
            {
                TasksAPI.all().map(t => (
                    <li key={t.taskid}>
                        <Link to={`/details/${t.taskid}`}>{t.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default Home