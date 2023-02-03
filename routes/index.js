const router = require("express").Router();
const userRouter = require("./User");
const postRouter = require("./Post");
const checkAuth = require("../middlewares/Auth");

router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router;
