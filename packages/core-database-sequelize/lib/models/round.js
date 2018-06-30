'use strict'

/**
 * Define the round model.
 * @param  {Sequelize} sequelize
 * @param  {Sequelize.DataTypes} DataTypes
 * @return {Sequelize.Model}
 */
module.exports = (sequelize, DataTypes) => {
  const Round = sequelize.define('round', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    publicKey: {
      type: DataTypes.STRING(66),
      field: 'public_key'
    },
    balance: DataTypes.BIGINT,
    round: DataTypes.BIGINT,
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
    }
  }, {})

  return Round
}
