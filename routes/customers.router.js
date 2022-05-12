const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
const CustomersService = require('./../services/customers.service');
const {
  createCustomerDTO,
  updateCustomerDTO,
  getCustomerDTO,
  deleteCustomerDTO,
} = require('./../schemas/customers.dto');

const router = express.Router();
const service = new CustomersService();
console.log(service);

router.get('/', async (req, res, next) => {
  try {
    const getCustomers = await service.find();
    return res.status(200).json(getCustomers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCustomerDTO, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const getCustomer = await service.findOne(id);
      return res.status(200).json(getCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCustomerDTO, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await service.create(body);
      return res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCustomerDTO, 'params'),
  validatorHandler(updateCustomerDTO, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateCustomer = await service.update(id, body);
      return res.status(200).json(updateCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteCustomerDTO, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteCustomer = await service.delete(id);
      return res.status(200).json(deleteCustomer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
