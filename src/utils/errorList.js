module.exports = {
  EMPITYFIELDS: {
    status: 400,
    message: 'Some required fields are missing',
  },
  FIELDNOTFOUND: {
    status: 400,
    message: 'Invalid fields',
  },
  INVALIDDISPLAYNAMELENGTH: {
    status: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  INVALIDEMAILFIELD: {
    status: 400,
    message: '"email" must be a valid email',
  },
  INVALIDPASSWORDLENGTH: {
    status: 400,
    message: '"password" length must be at least 6 characters long',
  },
  EMAILALREADYINDATABASE: {
    status: 409,
    message: 'User already registered',
  },
  USERNOTFOUND: {
    status: 404,
    message: 'User does not exist',
  },
  EMPITYNAMEFIELD: {
    status: 400,
    message: '"name" is required',
  },
  CATEGORYNOTFOUND: {
    status: 400,
    message: '"categoryIds" not found',
  },
  POSTNOTFOUND: {
    status: 404,
    message: 'Post does not exist',
  },
  UNAUTHORIZEDUSER: {
    status: 401,
    message: 'Unauthorized user',
  },
  TOKENNOTFOUND: {
    status: 404,
    message: 'Invalid token',
  },
  TokenExpiredError: {
    status: 400,
    message: 'jwt expired',
  },
  JsonWebTokenError: {
    status: 400,
    message: 'jwt malformed',
  },
  NotBeforeError: {
    status: 400,
    message: 'jwt not active',
  },
};
