const { userSchema } = require('../utils/joiSchemas');

const validateUserFields = (req, res, next) => {
  const payload = req.body;
  const { error } = userSchema.validate(payload);
  if (error) throw new Error(error.message);
  next();
};

module.exports = validateUserFields;
