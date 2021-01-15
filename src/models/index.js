const Sequelize = require('sequelize');
const postModel = require('./post');


const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
  });

  const Posts = postModel(connection, Sequelize); 

  connection.sync({ alter: true });
  return {
    Posts
  };
};

module.exports = setupDatabase();
