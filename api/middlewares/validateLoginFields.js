const { loginSchema } = require('../utils/joiSchemas');

const validateUserFields = (req, res, next) => {
  const payload = req.body;
  const { error } = loginSchema.validate(payload);
  if (error) throw new Error(error.message);
  next();
};

module.exports = validateUserFields;
