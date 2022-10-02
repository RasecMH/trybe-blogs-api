const { validateToken } = require('../utils/jwtToken');

const authToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ message: 'TOKENNOTFOUND' });

  try {
    const userData = await validateToken(authorization);
    req.locals = userData;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authToken;
