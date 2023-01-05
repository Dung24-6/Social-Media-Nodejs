const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getALLUsers);

module.exports = router;
