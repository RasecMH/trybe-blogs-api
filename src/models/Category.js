module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    }
  );

  // Category.associate = (models) => {
  //   Category.belongsToMany(models.BlogPost, {
  //     as: 'posts',
  //     foreignKey: 'categoryId',
  //     through: 'PostCategory',
  //   });
  // };

  return Category;
};
