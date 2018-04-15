'use strict';
module.exports = (sequelize, DataTypes) => {
  var Competency = sequelize.define('Competency', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true
      }
    },
    multiplier: {
      type: DataTypes.FLOAT,
      defaultValue: 1.0,
      validate: {
        min: 0
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Competency.associate = function(models) {
    // Competency has many Scales
    models.Competency.hasMany(models.Scale, {
      foreignKey: 'competencyId'
    });
  };
  return Competency;
};
