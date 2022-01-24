const fs = require('fs')
const Sequelize = require('sequelize');

const User = require('./user');
const Category = require('./category')
const Post = require('./post');
const Tag = require('./tag');
const PostTag = require('./postTag');
const UserPost = require('./userPost');
require('./search');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Post, { as: "posts" });

Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: UserPost
});

Post.belongsToMany(Tag, {
  through: PostTag
});

Tag.belongsToMany(Post, {
  through: PostTag
});

module.exports = { 
  User, 
  Category,
  Post,
  Tag,
  PostTag
  };
