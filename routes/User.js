const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkAuth = require("../middlewares/Auth");

router.get("/", UserController.getALLUsers);

router.get("/:userId", UserController.getById);

router.post("/register", UserController.registerUser);

router.delete("/:userId", UserController.deleteUser);

router.post("/login", UserController.loginUser);

router.post("/privateLogin", UserController.privateLogin);

router.get("/checkAuth", checkAuth.checkAuth, (req, res) => {
  res.json("Login oke");
});

module.exports = router;
