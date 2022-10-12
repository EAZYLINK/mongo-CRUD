const { APIError } = require("../middleware/APIError");
const Task = require("../models/task.model")


const createTask = async(req, res, next) =>{

    const body = req.body;
    if (!body) {
        return next(APIError.badRequest("Please fill all the required field"))
    }
    try {
    const task = await  Task.create(body);
    task.save();
    res.status(201).json({
        success: true,
        message: "Task created",
        Task: task,
    })
} catch (error) {
   next(error);
}
}

const getSingleTask = async(req, res, next) =>{
    const { id} = req.params;
    if (!id) {
        return next(APIError.badRequest("Please supply task ID as params"));
    }
    try {
        const task = await Task.findById({_id: id});
        res.status(200).json({
            success: true,
            message: "task fetched successfully",
            Task: task
        })
    } catch (error) {
        next(error);
    }
}

const getAllTasks = async(req, res, next) =>{
    try {
        const task = await Task.find();
        res.status(200).json({
            success: true.valueOf,
            message: "All tasks fetched successfully",
            Tasks: task
        })
    } catch (error) {
       next(error) 
    }
}

const updateTask = async(req, res, next) =>{
    const {id} = req.params;
    if (!id) {
        return next(APIError.badRequest("Please supply the ID of task to be updated"))
    }
    try {
        const task = await Task.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        });
    res.status(200).json({
        success: true,
        message: "Task updated successfully",
        Task: task
    })
    } catch (error) {
        next(error)
    }
}

const deleteTask = async(req, res, next) =>{
    const {id} = req.params;
    if (!id) {
        return next(APIError.badRequest("Please supply the task ID to be deleted"));
    }
    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: `Task with ID ${id} has been deleted successfully`
        })
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createTask,
    getSingleTask,
    getAllTasks,
    updateTask,
    deleteTask
}