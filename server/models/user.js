const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {};

// add profile picture
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    bio: {
      type: DataTypes.STRING
    },
    creatures: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user',
    ignoreDuplicates: true
  }
);

module.exports = User;
