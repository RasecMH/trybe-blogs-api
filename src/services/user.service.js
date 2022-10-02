const { User } = require('../models');
const { createToken } = require('../utils/jwtToken');

const create = async (displayName, email, password, image) => {
  try {
    const user = await User.create({ displayName, email, password, image });
    return createToken({ id: user.dataValues.id, email: user.dataValues.email });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') throw new Error('EMAILALREADYINDATABASE');
    throw new Error(error.name);
  }
};

const getAll = async () => {
    const user = await User.findAll({ attributes: { exclude: ['password'] } });
    return user;
};

module.exports = { create, getAll };
