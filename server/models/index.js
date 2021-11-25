const User = require('./user');
const Category = require('./category')
const Post = require('./post');
const Tag = require('./tag');
const PostTag = require('./postTag');
const Creature = require('./creature')

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Post, { as: "posts" });

Post.belongsTo(Category, {
  foreignKey: 'category_id',
  // as: 'category'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsToMany(Tag, {
  through: PostTag
});

Tag.belongsToMany(Post, {
  through: PostTag
});

Creature.hasMany(Tag, {as: 'tags'});


module.exports = { 
  User, 
  Category,
  Post,
  Tag,
  PostTag,
  Creature
  };
