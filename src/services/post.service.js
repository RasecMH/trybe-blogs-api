const { BlogPost, PostCategory, sequelize } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
  console.log('Service: ', categoryIds);
  return sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId: id, published: Date.now(), updated: Date.now() },
      { transaction: t },
    );

    await Promise.all(categoryIds.map(async (categoryId) => 
    PostCategory.create({ postId: newPost.dataValues.id, categoryId }, { transaction: t })));
    return newPost;
  });
};

module.exports = { create };
