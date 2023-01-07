const { UsersModel } = require("../models/User");

const getALLUsers = async (req, res) => {
  const users = await UsersModel.findAll();
  res.status(200).json(users);
};

const registerUser = async (req, res) => {
  // const { username, email, password } = req.body;
  // if (!(username && email && password)) {
  //   res.status(500).json("Not enough params");
  // }
  // const exitingUser = await UsersModel.findOne({ where: { email: email } });
  // if (exitingUser) {
  //   res.status(500).json("Email already in use");
  // }
  // try {
  //   await UsersModel.create({
  //     username,
  //     email,
  //     password,
  //   });
  // } catch (err) {
  //   return res.status(500).json("Can't register");
  try {
    const { username, email, password } = req.body;
    if (!(username && email && password)) {
      throw new Error("Not enough params");
    }
    const existingUser = await UsersModel.findOne({ where: { email: email } });
    if (existingUser) {
      throw new Error("Email  must be unique");
    }
    const user = await UsersModel.create({
      username,
      email,
      password,
    });
    return res.json("blablaok");
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      throw new Error("Missing input");
    }
    const user = await UsersModel.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("Email incorrect");
    }
    if (password !== user.password) {
      throw new Error("Password incorrect");
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
