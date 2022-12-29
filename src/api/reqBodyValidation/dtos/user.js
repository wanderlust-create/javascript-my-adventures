const yup = require("yup");

module.exports = yup.object().shape({
  email: yup.string().trim().required(),
  first_name: yup.string().trim().required(),
  last_name: yup.string().trim().required(),
});
