const errorList = require('../utils/errorList');

const error = (err, req, res, _next) => {
  // console.log('Xablau', err);
  const errorInfo = errorList[err.message];
  const status = errorInfo.status || 500;
  const message = errorInfo.message || 'Internal server error';

  return res.status(status).json({ message });
};

module.exports = error;
