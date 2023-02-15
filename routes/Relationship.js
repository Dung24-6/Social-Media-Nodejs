const express = require("express");
const router = express.Router();
const RelationshipController = require("../controllers/RelationshipController");

router.post("/createRelationship", RelationshipController.createRelationship);

router.delete("/:relationshipId", RelationshipController.removeRelationship);

module.exports = router;
