'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'blog_posts',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        published: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        underscored: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  },
};
