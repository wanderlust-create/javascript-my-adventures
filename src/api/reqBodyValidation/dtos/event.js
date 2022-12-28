const yup = require("yup");

module.exports = yup.object().shape({
  title: yup.string().trim().required(),
  cityId: yup.number().required(),
});
