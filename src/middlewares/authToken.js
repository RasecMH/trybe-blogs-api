const { validateToken } = require('../utils/jwtToken');

const authToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) throw new Error('TOKENNOTFOUND');

  const userData = await validateToken(authorization);
  req.locals = userData;
  next();
};

module.exports = authToken;
