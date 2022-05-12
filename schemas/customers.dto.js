const Joi = require('joi');

const id = Joi.number().min(1);
const typeDocument = Joi.string().min(2).max(3);
const idDocument = Joi.number().min(6).max(11);
const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.number().min(8).max(12);
const address = Joi.string().min(8);

const createCustomerDTO = Joi.object({
  typeDocument: typeDocument.required(),
  idDocument: idDocument.required(),
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  address: address.required(),
});

const updateCustomerDTO = Joi.object({
  typeDocument: typeDocument,
  idDocument: idDocument,
  name: name,
  lastName: lastName,
  phone: phone,
  address: address,
});

const getCustomerDTO = Joi.object({
  id: id.required(),
});

const deleteCustomerDTO = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerDTO,
  updateCustomerDTO,
  getCustomerDTO,
  deleteCustomerDTO,
};
