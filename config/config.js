const { Sequelize } = require("Sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize("api", "postgres", "havanquocdung", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = sequelize;
