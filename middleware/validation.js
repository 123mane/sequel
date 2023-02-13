const schema = require("../valid/user");

module.exports = {
  adduser: async (req, res, next) => {
    const value = await schema.user.validate(req.body);

    if (value.error) {
      res.json({
        success: false,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
  addproduct: async (req, res, next) => {
    const value = await schema.product.validate(req.body);
    if (value.error) {
      res.json({ success: false, message: value.error.details[0].message });
    } else {
      next();
    }
  },
};
