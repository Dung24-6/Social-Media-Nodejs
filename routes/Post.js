const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.post("/createPost", PostController.createPost);

router.delete("/:postId", PostController.deletePost);

router.get("/", PostController.getAllPosts);

module.exports = router;
