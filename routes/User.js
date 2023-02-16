const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const checkAuth = require("../middlewares/Auth");
const upload = require("../middlewares/Upload");

router.get("/", UserController.getALLUsers);

router.get("/:userId", UserController.getById);

router.post("/register", UserController.registerUser);

router.delete("/:userId", UserController.deleteUser);

router.post("/login", UserController.loginUser);

router.post("/privateLogin", UserController.privateLogin);

router.get("/checkAuth", checkAuth.checkAuth, (req, res) => {
  res.json("Login oke");
});

router.get("/:userId/avatar", UserController.getAvatar);

router.post(
  "/:userId/uploadAvatar",
  upload.single("avatar"),
  UserController.uploadAvatar
);

module.exports = router;
