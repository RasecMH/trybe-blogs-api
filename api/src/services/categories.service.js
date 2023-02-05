const { Category } = require('../models');

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  return category.dataValues.id;
};

module.exports = { create, getAll, getById };
