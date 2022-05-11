const Joi = require('joi');
const { UsersSchema } = require('../db/models/users.model');

const id = Joi.number().min(1);
const names = Joi.string().min(3).max(30);
const surnames = Joi.string().min(3).max(30);
const email = Joi.string().email({ tlds: true });
const password = Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/);
const role = Joi.string().min(5);

const createUserDTO = Joi.object({
  names: names.required(),
  surnames: surnames.required(),
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateUserDTO = Joi.object({
  names: names,
  surnames: surnames,
  email: email,
  password: password,
  role: role,
});

const getUserDTO = Joi.object({
  id: id.required(),
});

const deleteUserDTO = Joi.object({
  id: id.required(),
});

module.exports = { createUserDTO, updateUserDTO, getUserDTO, deleteUserDTO };
