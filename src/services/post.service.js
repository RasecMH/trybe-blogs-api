const { BlogPost, PostCategory } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
      const newPost = await BlogPost.create(
        { title, content, userId: id, published: Date.now(), updated: Date.now() },
      );
  
      await Promise.all(categoryIds.map((categoryId) => 
      PostCategory.create({ postId: newPost.dataValues.id, categoryId })));
      return newPost;
};

module.exports = { create };

// const { BlogPost, PostCategory, sequelize } = require('../models');

// const create = async ({ title, content, categoryIds, id }) => {
//   console.log('Service: ', categoryIds);
//   const t = await sequelize.transaction();
  
//       try {
//       const newPost = await BlogPost.create(
//         { title, content, userId: id, published: Date.now(), updated: Date.now() },
//         { transaction: t },
//       );
  
//       await Promise.all(categoryIds.map((categoryId) => 
//       PostCategory.create({ postId: newPost.dataValues.id, categoryId }, { transaction: t })));
//       await t.commit();
//       return newPost;
//     } catch (error) {
//       await t.rollback();
//       console.log(error);
//     }
// };

// module.exports = { create };