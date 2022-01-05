const { User } = require('../models');

const userData =[
  {
    username: "neckbeard54"
    // email: "chickmagnet@friendzone.com"
  },
  {
    username: "sasquatchbeliever"
    // email: "coderedmtdew@momsbasement.org"
  },
  {
    username: "badsmells297"
    // email: "plantdaddy@gmail.com"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

