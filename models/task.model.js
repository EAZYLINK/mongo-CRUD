const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please supply title of task"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please describe the task"],
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})
const Task = model("Task", TaskSchema);
module.exports = Task;