'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipes', {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('recipes');
  }
};
