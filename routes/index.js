const router = require("express").Router();
const userRouter = require("./User");
const postRouter = require("./Post");
const commentRouter = require("./Comment");
const relationshipRouter = require("./Relationship");
const likeRouter = require("./Like");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);
router.use("/relationship", relationshipRouter);
router.use("/likes", likeRouter);

module.exports = router;
