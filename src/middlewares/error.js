const errorList = require('../utils/errorList');

const error = (err, req, res, _next) => {
  // console.log('Xablau', err.message);
  const errorInfo = errorList[err.message] || err;
  const status = errorInfo.status || 500;
  const message = errorInfo.message || 'Internal server error';

  return res.status(status).json({ message });
};

module.exports = error;
