/*
 * Task data API
 * A Simple Solution for data storage in this case
 */

 const TasksAPI = {
     general: [
        {taskid: 1000, order: 1, title: "The First Task Item", description: "The task item has a description here.", duedate: '2020-10-10', priority: 3, completed: false},
        {taskid: 1001, order: 2, title: "The Next Task Item", description: "The task item has a description here.", duedate: '2020-09-05', priority: 2, completed: true},
     ],
     all: function() { return this.general},
     get: function(id) {
         const isGeneral = g => g.taskid === id
         return this.general.find(isGeneral)
     }
 }
 export default TasksAPI