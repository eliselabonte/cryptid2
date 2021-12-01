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
    favorite: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'id',
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
            model: 'posts',
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
