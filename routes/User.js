const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkAut = require("../middlewares/Auth");

router.get("/", UserController.getALLUsers);

router.get("/:id", UserController.getById);

router.post("/register", UserController.registerUser);

router.delete("/:id", UserController.deleteUser);

router.post("/login", UserController.loginUser);

router.post("/privateLogin", UserController.privateLogin);

router.get("/checkAuth", checkAut.checkAuth, (req, res) => {
  res.json("Login oke");
});

module.exports = router;
