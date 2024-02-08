'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    projectID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Project;
};
