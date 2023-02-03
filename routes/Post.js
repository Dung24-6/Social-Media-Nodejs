const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.post("/createPost", PostController.createPost);

router.delete("/:postId", PostController.deletePost);

module.exports = router;
