'use strict'

const env = process.env.NODE_ENV || 'development';

module.exports = {
    up: (queryInterface) => {
        let recipes;
        if (env === 'test') {
            recipes = require('./recipeData/recipe-list.test')();
        } else {
            recipes = require('./recipeData/recipe-list')();
        }
        return queryInterface.bulkInsert('recipes', recipes);
    },
    down: function () {

    }
}
