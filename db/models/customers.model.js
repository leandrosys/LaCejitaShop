const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMERS_TABLE = 'tbl_customers';

const CustomersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  typeDocument: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'type_Document',
  },
  idDocument: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'id_document',
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Customers extends Model {
  static associate() {
    //asociate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMERS_TABLE,
      modelName: 'Customers',
      timestamp: false,
    };
  }
}

module.exports = { CUSTOMERS_TABLE, CustomersSchema, Customers };
