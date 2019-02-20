const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskTitle: String,
    taskDescription: String,
    isDone: Boolean,
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
