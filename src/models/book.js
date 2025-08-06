'use strict';
const {GENRE} = require('../utils/common/enums');
console.log(GENRE);
const {FICTION,NON_FICTION,MYSTERY,ROMANCE,SCIENCE_FICTION,FANTASY,HISTORICAL_FICTION,HORROR,BIOGRAPHY,SELF_HELP} = GENRE;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey : "sellerId",
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE',
      })
    }
  }
  Book.init({
    title: {
      type :DataTypes.STRING,
      allowNull : false,
       unique : true
    },
    author:
    {
       type :DataTypes.STRING,
       allowNull : false
    },
    price: {
      type :DataTypes.INTEGER,
      allowNull  : false
    },
    stock: {
     type :DataTypes.INTEGER,
    },
    sellerId:{
     type : DataTypes.INTEGER,
     allowNull : false
    }, 
    genre: {
      type :DataTypes.ENUM,
      values : [FICTION,NON_FICTION,FANTASY,MYSTERY,ROMANCE,BIOGRAPHY,HISTORICAL_FICTION,HORROR,SELF_HELP,SCIENCE_FICTION]
  }},
  {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};