'use strict';
module.exports = (sequelize, DataTypes) => {
  var Write = sequelize.define('Write', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Write.associate = function(models) {
    Write.belongsTo(models.User);
  };
  return Write;
};