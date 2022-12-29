const yup = require("yup");

module.exports = yup.object().shape({
  title: yup.string().trim().required(),
  city_id: yup.number().required(),
});
