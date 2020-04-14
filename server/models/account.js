'use strict';
module.exports = (sequelize, Type) => {
  const account = sequelize.define('account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: {
      type: Type.STRING,
      allowNull: false
    }
  }, {});
  account.associate = function(models) {
    // associations can be defined here
  };
  return account;
};