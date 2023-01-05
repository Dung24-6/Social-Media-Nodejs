const { UsersModel } = require("../models/User");

const getALLUsers = async (req, res) => {
  const users = await UsersModel.findAll();
  res.status(200).json(users);
};

module.exports = {
  getALLUsers,
};
