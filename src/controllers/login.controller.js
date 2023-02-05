const loginServices = require('../services/login.service');

const createLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.createLogin(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { createLogin };
