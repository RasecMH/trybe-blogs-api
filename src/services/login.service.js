const { User } = require('../models');
const { createToken } = require('../utils/jwtToken');

const createLogin = async (email, password) => {
  const { dataValues } = await User.findOne({ where: { email, password } });
  if (!dataValues) throw new Error('FIELDNOTFOUND');
  return createToken({ id: dataValues.id, email: dataValues.email });
};

module.exports = { createLogin };
