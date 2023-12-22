'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alumnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Alumno: {
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      ApellidoP: {
        type: Sequelize.STRING
      },
      ApellidoM: {
        type: Sequelize.STRING
      },
      Matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'cuenta',
            key: 'Matricula'
        },
      },
      Edad: {
        type: Sequelize.INTEGER
      },
      Telefono: {
        type: Sequelize.INTEGER
      },
      Ocupación: {
        type: Sequelize.STRING
      },
      CorreoElectrónico: {
        type: Sequelize.STRING
      },
      ID_Usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'ID_Usuario'
        },
      },
      MatriculaCuenta: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('alumnos');
  }
};