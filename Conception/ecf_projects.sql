-- ECF: Application Web de Gestion de Projets
-- MySQL Workbench Script

-- Création de la base de données ecf_projects
CREATE DATABASE IF NOT EXISTS ecf_projects;
USE ecf_projects;

-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
  userID INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);

-- Création de la table projects
CREATE TABLE IF NOT EXISTS projects (
  projectID INT AUTO_INCREMENT PRIMARY KEY,
  projectName VARCHAR(255) NOT NULL,
  projectDescription TEXT NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(userID)
);

-- Création de la table tasks
CREATE TABLE IF NOT EXISTS tasks (
  taskID INT AUTO_INCREMENT PRIMARY KEY,
  taskName VARCHAR(255) NOT NULL,
  taskDescription TEXT NOT NULL,
  state ENUM('todo', 'inprogress', 'done') NOT NULL,
  project_id INT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(projectID)
);

