'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts_categories',
      {
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'blog_posts', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'categories', key: 'id' },
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
