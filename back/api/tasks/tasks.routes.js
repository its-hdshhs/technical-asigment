const express = require("express")
const {createTask,getTasks,deleteTask,updateTask} = require("./tasks.controller")
const {protect} = require("../middlewares/authMiddleware")
const task = express.Router();

task.use(protect);

task.post("/", createTask);
task.get("/", getTasks);
task.put("/:id", updateTask);
task.delete("/:id", deleteTask);

module.exports = task;