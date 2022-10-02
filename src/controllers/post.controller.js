const categoriesService = require('../services/categories.service');
const postService = require('../services/post.service');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.locals;
  console.log('Controller: ', id);
  const validateCategoriesIds = await Promise.all(categoryIds.map(async (categoryId) => (
    await categoriesService.getById(categoryId) || null
  )));
  const validIds = validateCategoriesIds.filter((cid) => cid !== null);
  if (!validIds.length) return next({ message: 'CATEGORYNOTFOUND' });   

  const newPost = await postService.create(
    { title, content, categoryIds: validIds, id },
    );
  return res.status(201).json(newPost);
};

const getAll = async (_req, res) => {
  const allPosts = await postService.getAll();
  return res.status(200).json(allPosts);
};
module.exports = { create, getAll };
