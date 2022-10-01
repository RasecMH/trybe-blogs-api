'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts_categories',
      {
        postId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'blog_posts', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
        },
        categoryId: {
          type: Sequelize.STRING,
          allowNull: false,
          references: { model: 'blog_posts', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
        },
      },
      {
        underscored: true,
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};
