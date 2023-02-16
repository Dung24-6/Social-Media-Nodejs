const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/LikeController");

router.post("/createLike", LikeController.createLike);

router.delete("/:likeId", LikeController.deleteLike);

router.get("/:likeUserId", LikeController.getLikesByUser);

router.get("/:likedUserId", LikeController.getLikesByLikedUser);

router.get("/:countLikedUserId", LikeController.getLikesCountByLikedUser);

module.exports = router;
