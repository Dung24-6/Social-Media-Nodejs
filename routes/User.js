const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const upload = require("../middlewares/Upload");
const auth = require("../middlewares/Auth");

router.get("/", UserController.getALLUsers);

router.get("/:userId", UserController.getById);

router.post("/register", UserController.registerUser);

router.delete("/:userId", UserController.deleteUser);

router.post("/login", UserController.loginUser);

router.post("/privateLogin", UserController.privateLogin);

router.post("/checkAuth", auth.checkAuth, (req, res, next) => {
  res.json("Login private oke");
});

router.get("/:userId/avatar", UserController.getAvatar);

router.post(
  "/:userId/uploadAvatar",
  upload.single("avatar"),
  UserController.uploadAvatar
);

module.exports = router;
