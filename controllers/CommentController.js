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

const getComment = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await CommentsModel.findAll({
      where: { postId: postId },
    });
    return res.json(comments);
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

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  try {
    if (!commentId || !content) {
      return res.status(400).json("Not enough params");
    }

    const comment = await CommentsModel.findOne({
      where: { commentId: commentId },
    });

    if (!comment) {
      return res.status(404).json("Comment not found");
    }

    comment.content = content;
    await comment.save();

    return res.json(comment);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createComment,
  deleteComment,
  getComment,
  updateComment,
};
