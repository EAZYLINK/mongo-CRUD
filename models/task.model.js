const {Schema, Model} = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please supply name of task"],
        trim: true,
        minLength: [3, "Title must contain atleast 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please describe the task"],
        minLength: [3, "Description must be atleast 3 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timeStamps: true})
const Task = Model("Task", TaskSchema);
module.exports = Task;