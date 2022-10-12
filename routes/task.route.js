const express = require('express');
const { createTask, getSingleTask, getAllTasks, updateTask, deleteTask } = require('../controllers/task.controller');
const taskRouter = express.Router();

taskRouter.post('/', createTask).get('/', getAllTasks).put('/:id', updateTask)
taskRouter.get('/:id', getSingleTask).delete('/:id', deleteTask)



module.exports = taskRouter;