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

const getById = async (id) => BlogPost.findByPk(id,
  { include: [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories' },
  ] });

const updateById = async (id, title, content, userId) => {
  const validateUser = await getById(id);
  if (validateUser.user.id !== userId) throw new Error('UNAUTHORIZEDUSER');
  await BlogPost.update({ title, content }, { where: { id } },
  { include: [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories' },
  ] });
  return getById(id);
};

const deleteById = async (id, userId) => {
  const post = await getById(id);
  if (!post) throw new Error('POSTNOTFOUND');
  if (post.user.id !== userId) throw new Error('UNAUTHORIZEDUSER');
  await post.destroy();
};

module.exports = { create, getAll, getById, updateById, deleteById };