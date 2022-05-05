const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'tbl_users';

const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  names: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  surname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  enable: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  updateAt: {
    allowNull: false,
    type: DataTypes.DATE,
    file: 'update_at',
    defaultValue: Sequelize.NOW,
  },
};

class Users extends Model {
  static associate() {
    // asociate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, UsersSchema, Users };
