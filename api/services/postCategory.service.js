const { PostCategory } = require('../models');

const create = async (postId, categoryId) => {
  await PostCategory.create({ postId, categoryId });
};

module.exports = { create };
