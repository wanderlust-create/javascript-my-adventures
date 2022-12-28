const ApiError = require('./api-error')
const logger = require('../../../utils/logger')

function apiErrorHandler(err, req, res, next) {
  logger.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json("An error occurred");
}

module.exports = apiErrorHandler;