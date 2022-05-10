const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class UserServices {
  async find() {
    const getUsers = await models.Users.findAll();
    return getUsers;
  }

  async findOne(id) {
    const getUser = await models.Users.findByPk(id);
    if (!getUser) {
      throw boom.notFound('user not found');
    }
    return getUser;
  }

  async create(data) {
    try {
      const newUser = await models.Users.create(data);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async update(id, changes) {
    try {
      const user = await this.findOne(id);
      //const updatedUser = await user.update({ changes, updateAt: new Date() });
      const updatedUser = await user.update(changes);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserServices;
