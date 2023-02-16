const { LikesModel } = require("../models/Like");

const createLike = async (req, res) => {
  const { likeUserId, likedUserId } = req.body;
  if (!(likeUserId && likedUserId)) {
    return res.status(400).json("Not enough params");
  }
  try {
    const like = await LikesModel.create({
      likeUserId,
      likedUserId,
    });
    return res.json(like);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteLike = async (req, res) => {
  const { likeId } = req.params;
  try {
    if (likeId) {
      const like = await LikesModel.findOne({ where: { likeId: likeId } });
      await like.destroy();
      return res.status(200).json("Delete successful");
    } else {
      return res.status(200).json("No id");
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getLikesByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const likes = await LikesModel.findAll({
      where: { likeUserId: userId },
    });
    return res.json(likes);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getLikesByLikedUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const likes = await LikesModel.findAll({
      where: { likedUserId: userId },
    });
    return res.json(likes);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getLikesCountByLikedUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const likesCount = await LikesModel.count({
      where: { likedUserId: userId },
    });
    return res.json({ likesCount });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createLike,
  deleteLike,
  getLikesByUser,
  getLikesByLikedUser,
  getLikesCountByLikedUser,
};
