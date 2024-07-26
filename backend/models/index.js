const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const db = {}

  db.sequelize = sequelize 
  db.Sequelize = Sequelize

  db.users = require('./userModel')(sequelize, DataTypes)

  db.sequelize.sync({force: false})
  .then(() => console.log('Connection has been established successfully'))
  .catch(error => console.log(`${error}`))

  module.exports = db