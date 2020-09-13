import React from 'react'
import { Link } from 'react-router-dom'
import TasksAPI from './api'
import './Details.css';


/* Comments
* Lots of repeat elements
* it would be better to generate all this using javascript
* need a better way to deal with completed tasks
*/
const Details = (props) => {

    const task = TasksAPI.get(
        parseInt(props.match.params.taskid, 10)
    )
    if(!task) {
        return <div>No task details were found.</div>
    }
    return (
    <div>
        <h2>Details</h2>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Type:</div>
            <div className='detail-col detail-value'>{task.type}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Title:</div>
            <div className='detail-col detail-value'>{task.text}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>ID:</div>
            <div className='detail-col detail-value'>{task.key}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Created:</div>
            <div className='detail-col detail-value'>{task.created}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Due:</div>
            <div className='detail-col detail-value'>{task.duedate}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Priority:</div>
            <div className='detail-col detail-value'>{task.priority}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Completed:</div>
            <div className='detail-col detail-value'>{task.completed}</div>
        </div>
        <div className='detail-row'>
            <div className='detail-col detail-key'>Description:</div>
            <div className='detail-col detail-value'>{task.description}</div>
        </div>
        
        <div className='router-return'>
            <Link to='/'>Back</Link>
        </div>
    </div>
    )
}

export default Details