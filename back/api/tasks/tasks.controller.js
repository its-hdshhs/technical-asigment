const taskModel = require("./tasks.model");

// CREATE TASK
const createTask = async (req, res) => {
  try {
    const task = await taskModel.create({
      ...req.body,
      userId: req.user.userId // ✅ FIXED
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET TASKS
const getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 5, status, search } = req.query;

    let query = { userId: req.user.userId }; // ✅ FIXED

    if (status) query.status = status;
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const tasks = await taskModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(tasks);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const updated = await taskModel.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { returnDocument: "after" }
    );

    if (!updated) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await taskModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  deleteTask,
  createTask,
  updateTask,
  getTasks
};