const { Project } = require('../config/db');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.update(req.body, {
      where: { projectID: req.params.projectId },
    });
    if (updated) {
      const updatedProject = await Project.findByPk(req.params.projectId);
      res.status(200).send(updatedProject);
    } else {
      res.status(404).send({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: { projectID: req.params.projectId },
    });
    if (deleted) {
      res.status(200).send({ message: 'Project deleted' });
    } else {
      res.status(404).send({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
