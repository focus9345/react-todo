import React, { Component } from 'react';

// No longer in use
// was used to display items after add

class TodoItems extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text} {item.duedate}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                { listItems }
            </ul>
        )
    }
}

export default TodoItems;
