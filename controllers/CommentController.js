const { CommentsModel } = require("../models/Comment.js");

const createComment = async (req, res) => {
  const { userId, postId, content } = req.body;
  if (!(userId && postId && content)) {
    return res.status(400).json("Not enough params");
  }
  try {
    const comment = await CommentsModel.create({
      userId,
      postId,
      content,
    });
    return res.json(comment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    if (commentId) {
      const comment = await CommentsModel.findOne({
        where: { commentId: commentId },
      });
      await comment.destroy();
      return res.status(200).json("Delete successful");
    } else {
      return res.status(200).json("No id");
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  deleteComment,
};
