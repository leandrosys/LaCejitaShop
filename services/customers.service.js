const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CustomerServices {
  async find() {
    const getCustomers = await models.Customers.findAll();
    return getCustomers;
  }

  async findOne(id) {
    const getCustomer = await models.Customers.findByPk(id);
    if (!getCustomer) {
      throw boom.notFound('user not found');
    }
    return getCustomer;
  }

  async create(data) {
    try {
      const newCustomer = await models.Customers.create(data);
      return newCustomer;
    } catch (error) {
      throw error;
    }
  }

  async update(id, changes) {
    try {
      const customer = await this.findOne(id);
      const updatedCustomer = await customer.update(changes);
      return updatedCustomer;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerServices;
