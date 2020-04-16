'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    wishlistId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.belongsTo(models.wishlist)
  };
  return user;
};