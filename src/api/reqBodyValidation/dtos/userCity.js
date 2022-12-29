const yup = require("yup");

module.exports = yup.object().shape({
  user_id: yup.number().required(),
  city_id: yup.number().required(),
});
