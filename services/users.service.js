const sequelize = require('../libs/sequelize');
const { models } = require('./../libs/sequelize');

class UserServices {
  async find() {
    const res = await models.Users.findAll();
    return res;
  }
}

module.exports = UserServices;
