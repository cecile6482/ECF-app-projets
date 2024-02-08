'use strict';

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    taskID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('todo', 'inprogress', 'done'),
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Task.associate = function(models) {
    Task.belongsTo(models.Project, { foreignKey: 'project_id' });
  };

  return Task;
};
