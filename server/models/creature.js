const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Creature extends Model { };

Creature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cryptid_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'post',
  }
)

module.exports = Creature;
