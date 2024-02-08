const express = require('express');
const router = express.Router();

// contrôleurs
const taskController = require('../controllers/taskController');

// Middleware
const verifyToken = require('../middleware/verifyToken');

// Routes
// Route pour ajouter une nouvelle tâche à un projet
router.post('/', verifyToken, taskController.createTask);

// Route pour récupérer toutes les tâches d'un projet
router.get('/:projectId', verifyToken, taskController.getTasksByProject);

// Route pour récupérer une tâche spécifique par son ID
router.get('/task/:taskId', verifyToken, taskController.getTaskById);

// Route pour mettre à jour une tâche
router.put('/:taskId', verifyToken, taskController.updateTask);

// Route pour supprimer une tâche
router.delete('/:taskId', verifyToken, taskController.deleteTask);

module.exports = router;