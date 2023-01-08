const { UsersModel } = require("../models/User");

const getALLUsers = async (req, res) => {
  try {
    var page = req.query.page;
    if (page) {
      page = parseInt(page);
      const users = await UsersModel.findAndCountAll({
        where: {},
        limit: 2,
        offset: page * 2 - 1,
      });
      return res.status(200).json(users);
    } else {
      const users = await UsersModel.findAll();
      return res.status(200).json(users);
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) {
    return res.status(400).json("Not enough params");
  }
  try {
    const exitingUser = await UsersModel.findOne({ where: { email: email } });
    if (exitingUser) {
      res.status(500).json("Email already in use");
    } else {
      const user = await UsersModel.create({
        username,
        email,
        password,
      });
      return res.json(user);
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).json("Missing input");
  }
  try {
    const user = await UsersModel.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json("Email incorrect");
    }
    if (password !== user.password) {
      return res.status(400).json("Password incorrect");
    }
    return res.json("OK");
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getALLUsers,
  registerUser,
  loginUser,
};
