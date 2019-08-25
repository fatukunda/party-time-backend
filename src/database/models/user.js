'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    bio: DataTypes.TEXT,
    avatar: DataTypes.BLOB
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};