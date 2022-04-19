const boom = require('@hapi/boom');

function validatorHandler(DTO, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = DTO.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
