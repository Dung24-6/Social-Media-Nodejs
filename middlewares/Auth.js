const jwt = require("jsonwebtoken");
const { UsersModel } = require("../models/user");

const checkAuth = async (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    return res.status(500).json("No token!");
  }

  try {
    let decoded = jwt.verify(token, "havanquocdung");

    const user = await UsersModel.findOne({ where: { userId: decoded.id } });

    if (!user) {
      return res.status(500).json("No User");
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json("You must be logged in first!");
  }
};
module.exports = {
  checkAuth,
};
