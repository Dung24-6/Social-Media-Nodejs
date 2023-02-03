const { DataTypes } = require("sequelize");
const db = require("../config/config");
const { PostsModel } = require("../models/Post");

const UsersModel = db.define(
  "users",
  {
    userId: {
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
    },
  },
  {
    freezeTableName: true,
  }
);

UsersModel.hasMany(PostsModel, {
  foreignKey: "userId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});

PostsModel.belongsTo(UsersModel, {
  foreignKey: "userId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});

module.exports = { UsersModel };
