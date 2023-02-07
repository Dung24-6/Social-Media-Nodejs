const { DataTypes } = require("sequelize");
const db = require("../config/config");

const CommentsModel = db.define(
  "comments",
  {
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { CommentsModel };
