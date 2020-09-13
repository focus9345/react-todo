/*
 * Task data API
 * A Simple Solution for data storage in this case
 * We are not writing to this file, after a refresh
 * any changes are lost
 */

 const TasksAPI = {
     items: [],
     all: function() { return this.items},
     get: function(id) {
         const isGeneral = g => g.key === id
         return this.items.find(isGeneral)
     },
     show: function() {
        return JSON.stringify(this.items)
     },
     set: function(newTaskObject) {
        this.items.push(newTaskObject)
        // shows the data in the console
        console.log('api items list: ' + JSON.stringify(this.items))
     }
 }
 export default TasksAPI