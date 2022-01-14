const { User } = require('../models');

const userData =[
  {
    username: "neckbeard54"
  },
  {
    username: "sasquatchbeliever"
  },
  {
    username: "badsmells297"
  },
  {
    username: "emlabonte714",
    bio: "just your average monster hunter",
    creatures: 'white walkers, the local ice cream man'
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

