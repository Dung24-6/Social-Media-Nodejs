const router = require("express").Router();
const userRouter = require("./User");
const checkAuth = require("../middlewares/Auth");

router.use("/users", userRouter);

module.exports = router;
