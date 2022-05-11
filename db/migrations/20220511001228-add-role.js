'use strict';

const { UsersSchema, USERS_TABLE } = require('./../models/users.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USERS_TABLE, 'role', UsersSchema.role);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(USERS_TABLE, 'role', UsersSchema.role);
  },
};
