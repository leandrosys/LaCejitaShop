const { ValidationError } = require('sequelize');
const { boom } = require('@hapi/boom');

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  return res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorhandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    const { name, errors } = err;
    return res.status(409).json({ message: name, errors });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorhandler };
