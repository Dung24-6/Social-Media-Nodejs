const { DataTypes } = require("sequelize");
const db = require("../config/config");

const PostsModel = db.define(
  "posts",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { PostsModel };
