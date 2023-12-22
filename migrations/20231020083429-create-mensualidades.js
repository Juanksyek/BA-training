'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mensualidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Mensualidad: {
        type: Sequelize.INTEGER
      },
      ID_Cuenta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cuenta',
          key: 'ID_Cuenta'
        },
      },
      Fecha: {
        type: Sequelize.DATE
      },
      NumeroPago: {
        type: Sequelize.INTEGER
      },
      Mes: {
        type: Sequelize.STRING
      },
      Monto: {
        type: Sequelize.FLOAT
      },
      Saldo: {
        type: Sequelize.FLOAT
      },
      FechaPago: {
        type: Sequelize.DATE
      },
      Recibo: {
        type: Sequelize.STRING
      },
      Ejecutivo: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('mensualidades');
  }
};