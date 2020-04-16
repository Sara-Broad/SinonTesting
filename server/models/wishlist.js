'use strict';
module.exports = (sequelize, DataTypes) => {
  const wishlist = sequelize.define('wishlist', {
    name: DataTypes.STRING
  }, {});
  wishlist.associate = function(models) {
    wishlist.belongsToMany(models.recipe, {through: 'wishlistRecipes'})
  };
  return wishlist;
};

