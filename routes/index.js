const router = require("express").Router();
const userRouter = require("./User");
const postRouter = require("./Post");
const commentRouter = require("./Comment");
const checkAuth = require("../middlewares/Auth");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

module.exports = router;
