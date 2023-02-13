const joi = require("joi");

const user = joi.object({
  name: joi.string().required(),
  lname: joi.string().required(),
  password: joi.string().required().max(5),
  gender: joi.string().valid("male", "female", "other").required(),
  email: joi.string().email().required(),
});

const product = joi.object({
  Productname: joi.string().required(),
  ProductPrice: joi.string().required(),
  quantity: joi.string().required(),
});

module.exports = { user, product };
