const { PostsModel } = require("../models/Post");

const createPost = async (req, res) => {
  const { userId, title } = req.body;
  if (!(userId && title)) {
    return res.status(400).json("Not enough params");
  }
  try {
    const post = await PostsModel.create({
      userId,
      title,
    });
    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    if (postId) {
      const post = await PostsModel.findOne({ where: { postId: postId } });
      await post.destroy();
      return res.status(200).json("Delete successful");
    } else {
      return res.status(200).json("No id");
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createPost,
  deletePost,
};
