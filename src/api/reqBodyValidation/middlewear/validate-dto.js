const ApiError = require("../error/api-error");

function validateDto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBodyData = await schema.validate(req.body);
      // replace req.body with validated schema object so that default values are applied to DTO
      req.body = validatedBodyData;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}
module.exports = validateDto;
