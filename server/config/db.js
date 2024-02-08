const Sequelize = require('sequelize');

// Initialisation de Sequelize 
const sequelize = new Sequelize('ecf_projects', 'root', 'Fac2medCine', {
  host: 'localhost',
  dialect: 'mysql',
});

// Importation et initialisation des modèles
const User = require('../models/user')(sequelize, Sequelize.DataTypes);
const Project = require('../models/project')(sequelize, Sequelize.DataTypes);
const Task = require('../models/task')(sequelize, Sequelize.DataTypes);

// Synchronisation des modèles avec la base de données
sequelize
  .sync({ force: false }) // `force: false` pour ne pas supprimer/re-créer les tables existantes
  .then(() => console.log('La base de données à bien été synchronisée'))
  .catch((error) => console.error('Problème lors de la synchronisation :', error.message));

module.exports = {
  sequelize,
  User,
  Project,
  Task,
};
