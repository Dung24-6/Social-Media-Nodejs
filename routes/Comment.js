const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

router.post("/createComment", CommentController.createComment);

router.delete("/:commentId", CommentController.deleteComment);

module.exports = router;
