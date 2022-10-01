const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign(payload, process.env.JWT_SECRET, jwtConfig);
};

const validateToken = (token) => {
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
