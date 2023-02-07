const { DataTypes } = require("sequelize");
const db = require("../config/config");

const LikesModel = db.define(
  "likes",
  {
    likeId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    likeUserId: {
      type: DataTypes.INTEGER,
    },
    likedUserId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { LikesModel };
