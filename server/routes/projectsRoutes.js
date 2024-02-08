const express = require('express');
const router = express.Router();

// contrôleurs
const projectController = require('../controllers/projectController');

// Middleware
const verifyToken = require('../middleware/verifyToken');

// Routes
// Route pour créer un nouveau projet
router.post('/', verifyToken, projectController.createProject);

// Route pour récupérer tous les projets
router.get('/', verifyToken, projectController.getAllProjects);

// Route pour récupérer un projet spécifique par son ID
router.get('/:projectId', verifyToken, projectController.getProjectById);

// Route pour mettre à jour un projet
router.put('/:projectId', verifyToken, projectController.updateProject);

// Route pour supprimer un projet
router.delete('/:projectId', verifyToken, projectController.deleteProject);

module.exports = router;