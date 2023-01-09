const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    var token = req.cookies.token;
    var id = jwt.verify(token, "havanquocdung");
    if (id) {
      return res
        .status(200)
        .json("Login with token ok , you can access private");
    }
    next();
  } catch (err) {
    return res.status(500).json("You must be logged in first!");
  }
};
module.exports = {
  checkAuth,
};
