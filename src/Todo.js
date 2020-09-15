import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import TasksAPI from './api'
import './todo.css';


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            formSubmit: false,
            showDate: new DateTime.local().plus({ days: 1 }).toISODate(),
            twoWeeks: new DateTime.local().plus({ days: 14 }).toISODate()
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        // works but really need to check each value and build object
        if (this._inputTitleElement.value !== "") {
            var newItem = {
                type: this._inpuTypeElement.value,
                text: this._inputTitleElement.value,
                duedate: this._inputDateElement.value,
                description: this._inputDescriptionElement.value,
                priority: this._inputPriorityElement.value,
                completed: false,
                created: DateTime.local().toISODate(),
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    // use concat to avoid mutation
                    items: prevState.items.concat(newItem),
                    formSubmit: true
                };
            });
            TasksAPI.set(newItem);
        }

        // clear the values once input is added
        this._inputTitleElement.value = "";
        this._inputDateElement.value = "";
        this._inputDescriptionElement.value = "";
        this._inpuTypeElement.value = "";
        this._inputPriorityElement.value = "";
        // as we add items we can see everything in the console
        console.log('Showing itmes from todo.js: ' + JSON.stringify(this.state.items));
        e.preventDefault();
    }

    render() {
        return (
            <section>
                <h2> Todo working</h2>
                <div className="todoListMain">
                    <div className="todoHeader">
                    {!this.state.formSubmit ? (
                        <div></div>
                    ) : (
                        <div>A new todo was added sucessfully.</div>
                    )}
                    <div>
                    ({ this.state.items.length }) tasks are listed.
                    </div>
                        <form onSubmit={this.addItem}>
                            <fieldset>
                                <legend>Create a new task item</legend>
                                <div className="todoFormEntries">
                                    <label htmlFor="taskType">Type:</label>
                                    <input
                                        ref={(a) => this._inpuTypeElement = a}
                                        id="taskType"
                                        placeholder="enter todo"
                                        pattern="[A-Za-z].{2,}"
                                        title="Three or more alpha characters "
                                        autoComplete="off"
                                        list="listOfType"
                                        autoFocus
                                        required
                                        >
                                    </input>
                                    <datalist id="listOfType">
                                        <option value="Honey Do" />
                                        <option value="Grocery" />
                                        <option value="Workout" />
                                        <option value="General" />
                                    </datalist>
                                </div>
                                <div className="todoFormEntries">
                                    <label htmlFor="taskTitle">Title:</label>
                                    <input
                                        ref={(a) => this._inputTitleElement = a}
                                        id="taskTitle"
                                        placeholder="enter todo"
                                        pattern="[A-Za-z].{2,}"
                                        title="Three or more alpha characters "
                                        autoComplete="off"
                                        required
                                        >
                                    </input>
                                </div>
                                <div className="todoFormEntries">
                                    <label htmlFor="taskDueDate">Due Date:</label>
                                    <input 
                                        ref={(a) => this._inputDateElement = a}
                                        type="date" 
                                        title="Select up to two weeks out"
                                        id="taskDueDate" 
                                        min={this.state.showDate} 
                                        max={this.state.twoWeeks}
                                        required
                                        >
                                    </input>
                                </div>
                                <div className="todoFormEntries">
                                    <label htmlFor="taskPriority">Priority <small>(5 means asap)</small>:</label>
                                    <input 
                                        ref={(a) => this._inputPriorityElement = a}
                                        type="range" 
                                        title="Five is a high priority"
                                        id="taskPriority" 
                                        min="1" 
                                        max="5" 
                                        step="1"
                                        required
                                        >
                                    </input>
                                </div>
                                
                                <div className="todoFormEntries">
                                    <textarea 
                                        ref={(a) => this._inputDescriptionElement = a}
                                        id="taskDescription" 
                                        rows="10" 
                                        cols="30"
                                        defaultValue="Enter a description."
                                        onChange={this.handleCheck}
                                        defaultChecked={this.state.checked}
                                        >
                                            
                                    </textarea>
                                </div>
                                <div className="todoFormEntries">
                                    <button
                                        type="submit">add</button>
                                </div>
                            </fieldset>
                        </form>
                        <div>
                            <small>{this.state.showString}</small>
                        </div>

                        <div className='router-return'>
                            <Link to='/'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Todo