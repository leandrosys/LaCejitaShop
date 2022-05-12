'use strict';

const {
  CustomersSchema,
  CUSTOMERS_TABLE,
} = require('./../models/customers.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMERS_TABLE, CustomersSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMERS_TABLE);
  },
};
