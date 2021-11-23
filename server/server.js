const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

require('dotenv').config();

const sequelize = require('./config/connection');
const { Server } = require('http');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

server.applyMiddleware({ app });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}).catch(err => {
  throw err;
})
