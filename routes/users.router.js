const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
const UsersService = require('../services/users.service');
const {
  createUserDTO,
  updateUserDTO,
  getUserDTO,
  deleteUserDTO,
} = require('./../schemas/users.dto');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const getUsers = await service.find();
    return res.status(200).json(getUsers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getUserDTO, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const getUser = await service.findOne(id);
      return res.status(200).json(getUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserDTO, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserDTO, 'params'),
  validatorHandler(updateUserDTO, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateProduct = await service.update(id, body);
      return res.status(200).json(updateProduct);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteUserDTO, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteUser = await service.delete(id);
      return res.status(200).json(deleteUser);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
