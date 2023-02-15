const router = require("express").Router();
const userRouter = require("./User");
const postRouter = require("./Post");
const commentRouter = require("./Comment");
const relationshipRouter = require("./Relationship");
const checkAuth = require("../middlewares/Auth");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);
router.use("/relationship", relationshipRouter);

module.exports = router;
