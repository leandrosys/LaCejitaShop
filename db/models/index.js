const { Users, UsersSchema } = require('./users.model');
const { Customers, CustomersSchema } = require('./customers.model');

function setupModels(sequelize) {
  Users.init(UsersSchema, Users.config(sequelize));
  Customers.init(CustomersSchema, Customers.config(sequelize));
}

module.exports = setupModels;
