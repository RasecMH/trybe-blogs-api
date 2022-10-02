const categoriesService = require('../services/categories.service');
const postService = require('../services/post.service');

const create = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.locals;
  console.log('Controller: ', id);
  const validCategoriesIds = await Promise.all(categoryIds.map(async (categoryId) => (
    await categoriesService.getById(categoryId) || []
  )));
  if (!(validCategoriesIds.flat(1).length)) next({ message: 'CATEGORYNOTFOUND' });   

  const newPost = await postService.create({ title, content, categoryIds, id });
  return res.status(201).json(newPost);
};

module.exports = { create };
