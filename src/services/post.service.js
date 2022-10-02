const { BlogPost, PostCategory, sequelize } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
  console.log('Service: ', categoryIds);
  const result = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create(
      { title, content, userId: id, published: Date.now(), updated: Date.now() },
      { transaction: t },
    );
    console.log('Transacition: ', newPost.dataValues.id);

    await Promise.all(categoryIds.map(async (categoryId) => 
    PostCategory.create({ postId: newPost.dataValues.id, categoryId }, { transaction: t })));

    return newPost;
  });
  return result;
};

module.exports = { create };

// const teste = [null, null];
// const mapTest = teste.map((test) => (test || [])).flat(1);
// console.log(!mapTest.length);
