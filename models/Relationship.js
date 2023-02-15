const { DataTypes } = require("sequelize");
const db = require("../config/config");

const RelationshipModel = db.define(
  "relationships",
  {
    relationshipId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    followeArUserId: {
      type: DataTypes.INTEGER,
    },
    followedUserId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { RelationshipModel };
