'use strict';
const {GENRE} = require('../utils/common/enums');
const {FICTION,NON_FICTION,MYSTERY,ROMANCE,SCIENCE_FICTION,FANTASY,HISTORICAL_FICTION,HORROR,BIOGRAPHY,SELF_HELP} = GENRE;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull : false,
        unique : true
      },
      author: {
        type: Sequelize.STRING,
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      stock: {
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
         model : 'Users',
         key : 'id'
        }
      },
      genre: {
        type: Sequelize.ENUM,
        allowNull : false,
        values : [FICTION,NON_FICTION,FANTASY,MYSTERY,ROMANCE,BIOGRAPHY,HISTORICAL_FICTION,HORROR,SELF_HELP,SCIENCE_FICTION]
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};