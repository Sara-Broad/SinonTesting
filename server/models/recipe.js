'use strict';
const recommendationList = require('.././static/enums')
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    mainIngredient: DataTypes.STRING,
    dishType: DataTypes.STRING,
    numIngredients: DataTypes.INTEGER
    // main ingredient
    // dish type
    // numIngredients
    // recommend - yes or no
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return recipe;
};