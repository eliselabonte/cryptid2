const { Model, DataTypes, NUMBER } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {};

// add profile picture
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    favorite_post_id:  {
      type: DataTypes.INTEGER,
        references: {
            model: 'userPosts',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
