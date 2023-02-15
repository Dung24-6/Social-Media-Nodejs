const { RelationshipModel } = require("../models/relationship.js");

const createRelationship = async (req, res) => {
  const { followerUserId, followedUserId } = req.body;
  if (!(followerUserId && followedUserId)) {
    return res.status(400).json("Not enough params");
  }
  try {
    const relationship = await RelationshipModel.create({
      followerUserId,
      followedUserId,
    });
    return res.json(relationship);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeRelationship = async (req, res) => {
  const { relationshipId } = req.params;
  try {
    if (relationshipId) {
      await RelationshipModel.destroy();
      return res.status(200).json("Delete successful");
    } else {
      return res.status(400).json("No id");
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createRelationship,
  removeRelationship,
};
