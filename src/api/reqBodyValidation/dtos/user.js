const yup = require("yup");

module.exports = yup.object().shape({
  email: yup.string().trim().required(),
  firstName: yup.string().trim().required(),
  lastName: yup.string().trim().required(),
});
