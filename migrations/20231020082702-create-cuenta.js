'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cuenta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Cuenta: {
        type: Sequelize.INTEGER
      },
      NumeroCuenta: {
        type: Sequelize.INTEGER
      },
      Matricula: {
        type: Sequelize.INTEGER
      },
      FechaMatricula: {
        type: Sequelize.DATE
      },
      Ciudad: {
        type: Sequelize.STRING
      },
      Ejecutivo: {
        type: Sequelize.STRING
      },
      Precio: {
        type: Sequelize.FLOAT
      },
      PagoInicial: {
        type: Sequelize.FLOAT
      },
      SaldoInicial: {
        type: Sequelize.FLOAT
      },
      NumeroPagos: {
        type: Sequelize.INTEGER
      },
      MontoMensualidad: {
        type: Sequelize.FLOAT
      },
      PrimerVencimiento: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('cuenta');
  }
};