const jwt = require('jsonwebtoken');

const createToken = async (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);
};

const validateToken = async (token) => {
  if (!token) throw new Error('TOKENNOTFOUND');

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error(error.name);
  }
};

module.exports = {
  createToken,
  validateToken,
};
