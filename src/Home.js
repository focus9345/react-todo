import React from 'react'
import TasksAPI from './api'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: TasksAPI.all().map((item) => item),
        };
        // This binding is necessary to make `this` work in the callback
        this.onDeleteItems = this.onDeleteItems.bind(this);
        
    }
    onDeleteItems = (key, e) => {

        TasksAPI.delete(key);
        this.setState(state => {
            const taskList = TasksAPI.all().map((item) => item);
            return {
                taskList,
            }
        });
        e.preventDefault();
    }
    

    render() {

        return ( 
            <div className="displayTasks">
                <h2>Tasks</h2>
                <ul className="taskmenu">
                {
                    this.state.taskList.map(t => (
                        <li key={t.key}>
                            <Link to={`/details/${t.key}`}>{t.text}</Link>
                            <button onClick={(e) => this.onDeleteItems(t.key, e)}>remove</button>
                            
                        </li>
                    ))
                }
                </ul>
            <div className="newTask"><Link to='/todo'>Add Task</Link></div>
            </div>
        );
    }
}

export default Home