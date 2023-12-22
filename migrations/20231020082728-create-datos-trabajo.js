'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('datosTrabajos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_DTrabajo: {
        type: Sequelize.INTEGER
      },
      TelefonoTrabajo: {
        type: Sequelize.STRING
      },
      DireccionTrabajo: {
        type: Sequelize.STRING
      },
      ColoniaTrabajo: {
        type: Sequelize.STRING
      },
      MunicipioTrabajo: {
        type: Sequelize.STRING
      },
      CPTrabajo: {
        type: Sequelize.STRING
      },
      ID_Titular: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'titular',
          key: 'ID_Titular'
        },
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
    await queryInterface.dropTable('datosTrabajos');
  }
};