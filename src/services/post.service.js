const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
      const newPost = await BlogPost.create(
        { title, content, userId: id, published: Date.now(), updated: Date.now() },
      );
  
      await Promise.all(categoryIds.map((categoryId) => 
      PostCategory.create({ postId: newPost.dataValues.id, categoryId })));
      return newPost;
};

const getAll = async () => BlogPost.findAll(
  { include: [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories' },
  ] },
);

module.exports = { create, getAll };