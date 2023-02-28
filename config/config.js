const { Sequelize } = require("Sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    port: process.env.DATABASE_PORT,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
console.log(process.env.DATABASE);
console.log(process.env.NAME);
console.log(process.env.PASSWORD);
console.log(process.env.HOST);
console.log(process.env.DATABASE_PORT);

module.exports = sequelize;
