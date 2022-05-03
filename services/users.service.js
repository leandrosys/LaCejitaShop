const pool = require('../libs/postgres.pool')

class UserServices {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err))
  }

  async find() {
    const query = 'SELECT * FROM users;'
    const rta = await this.pool.query(query);
    return rta.rows;
  }
}

module.exports = UserServices;
