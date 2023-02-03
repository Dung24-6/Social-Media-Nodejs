const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkAut = require("../middlewares/Auth");

router.get("/", UserController.getALLUsers);

router.get("/:userId", UserController.getById);

router.post("/register", UserController.registerUser);

router.delete("/:userId", UserController.deleteUser);

router.post("/login", UserController.loginUser);

router.post("/privateLogin", UserController.privateLogin);

router.get("/checkAuth", checkAut.checkAuth, (req, res) => {
  res.json("Login oke");
});

router.post("/createPost", UserController.createPost);

router.delete("/post/:postId", UserController.deletePost);

module.exports = router;
