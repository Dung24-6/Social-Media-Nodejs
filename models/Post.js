const { DataTypes } = require("sequelize");
const db = require("../config/config");

const PostsModel = db.define(
  "posts",
  {
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
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
