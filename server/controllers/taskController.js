const { Task } = require('../config/db');

// Crée une nouvelle tâche et l'associe à un projet spécifique
exports.createTask = async (req, res) => {
  try {
    const { taskName, taskDescription, state, projectId } = req.body;
    const task = await Task.create({
      taskName,
      taskDescription,
      state,
      projectId
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupère toutes les tâches associées à un projet spécifique
exports.getTasksByProject = async (req, res) => {
  try {
    const projectId = req.params.projectId;
    const tasks = await Task.findAll({ where: { projectId } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupère une tâche spécifique par son ID
exports.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Met à jour les détails d'une tâche existante
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const { taskName, taskDescription, state } = req.body;
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    task.taskName = taskName;
    task.taskDescription = taskDescription;
    task.state = state;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprime une tâche spécifique par son ID
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findByPk(taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
