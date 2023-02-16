const { DataTypes } = require("sequelize");
const db = require("../config/config");
const { PostsModel } = require("../models/Post");
const { CommentsModel } = require("../models/Comment");
const { LikesModel } = require("../models/Like");
const { RelationshipsModel } = require("../models/Relationship");

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
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
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
UsersModel.hasMany(CommentsModel, {
  foreignKey: "userId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});
UsersModel.hasMany(LikesModel, {
  foreignKey: "likeUserId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});
UsersModel.hasMany(LikesModel, {
  foreignKey: "likedUserId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});
UsersModel.hasMany(RelationshipsModel, {
  foreignKey: "followerId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});
UsersModel.hasMany(RelationshipsModel, {
  foreignKey: "followedId",
  sourceKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
  hooks: true,
});
CommentsModel.belongsTo(UsersModel, {
  foreignKey: "userId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});
CommentsModel.belongsTo(PostsModel, {
  foreignKey: "postId",
  targetKey: "postId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});

LikesModel.belongsTo(UsersModel, {
  foreignKey: "likeUserId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});
LikesModel.belongsTo(UsersModel, {
  foreignKey: "likedUserId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});

PostsModel.belongsTo(UsersModel, {
  foreignKey: "userId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});
RelationshipsModel.belongsTo(UsersModel, {
  foreignKey: "followerId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});
RelationshipsModel.belongsTo(UsersModel, {
  foreignKey: "followedId",
  targetKey: "userId",
  onDelete: "cascade",
  onUpdate: "NO ACTION",
});

module.exports = { UsersModel };
