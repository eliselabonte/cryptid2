const fs = require('fs')
const Sequelize = require('sequelize');

const User = require('./user');
const Category = require('./category')
const Post = require('./post');
const Tag = require('./tag');
const PostTag = require('./postTag');
// const Creature = require('./creature');
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

// user has many posts which they have written,
// user has many posts which they have favorited,
// posts can be saved by many users
Post.belongsToMany(User, {
  through: UserPost
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

// Creature.hasMany(Tag, {as: 'tags'});


module.exports = { 
  User, 
  Category,
  Post,
  Tag,
  PostTag,
  // Creature
  };
