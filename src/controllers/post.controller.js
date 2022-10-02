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

const getById = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getById(id);
  if (!post) return next({ message: 'POSTNOTFOUND' });
  return res.status(200).json(post);
};

const updateById = async (req, res, next) => {
  try {
    const { id } = req.params;
  const { title, content } = req.body;
  const postUpdated = await postService.updateById(id, title, content, req.locals.id);
  if (!postUpdated) return next({ message: 'POSTNOTFOUND' });
  return res.status(200).json(postUpdated);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
  const { id } = req.params;
  await postService.deleteById(id, req.locals.id);
  return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
module.exports = { create, getAll, getById, updateById, deleteById };
