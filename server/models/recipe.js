'use strict';
const recommendationList = require('.././static/enums')
module.exports = (sequelize, Type) => {
  const recipe = sequelize.define('recipe', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
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
    },
    recommend: {
      type: Type.ENUM(recommendationList),
      allowNull: false
    }
  }, {});
  book.associate = function(models) {
    // associations can be defined here
  };
  return recipe;
};
