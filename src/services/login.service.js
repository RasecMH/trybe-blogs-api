const { User } = require('../models');
const { createToken } = require('../utils/jwtToken');

const createLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new Error('FIELDNOTFOUND');
  return createToken({ id: user.dataValues.id, email: user.dataValues.email });
};

module.exports = { createLogin };
