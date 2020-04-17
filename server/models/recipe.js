'use strict';
module.exports = (sequelize, Type) => {
  const recipe = sequelize.define('recipe', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: Sequelize.INTEGER
    // },
    name: {
      type: Type.STRING,
      allowNull: false
    },
    mainIngredient: {
      type: Type.STRING,
      allowNull: false
    },
    dishType: {
      type: Type.STRING,
      allowNull: false
    },
    numIngredients: {
      type: Type.INTEGER,
      allowNull: false
    }
  }, {});
  recipe.associate = function(models) {
    recipe.belongsToMany(models.wishlist, {through: 'wishlistBooks'})
  };
  return recipe;
};
