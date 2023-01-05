const router = require("express").Router();
const userRouter = require("./User");

router.use("/users", userRouter);

module.exports = router;
