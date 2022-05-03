const express = require('express');

const UsersService = require('../services/users.service');
const router = express.Router();

const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  return res.json(users);
})

module.exports = router;
