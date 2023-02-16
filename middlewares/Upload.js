const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/avatars");
  },
  filename: function (req, file, cb) {
    cb(null, "avatar_" + req.params.userId + path.extname(file.originalname));
  },
});

const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
