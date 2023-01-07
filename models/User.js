const { DataTypes } = require("sequelize");
const db = require("../config/config");

const UsersModel = db.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = { UsersModel };