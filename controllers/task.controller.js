const { APIError } = require("../middleware/APIError");
const Task = require("../models/task.model")


const createTask = async() =>{
try {
    const body = req.body;
    if (!body) {
        return new APIError.badRequest("Please fill all the required field")
    }
    const task = await  Task.create(req.body);
} catch (error) {
    return new APIError.customeError("An error occured while creating this task");
}
}