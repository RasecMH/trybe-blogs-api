const loginServices = require('../services/login.service');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginServices.createLogin(email, password);
  return res.status(200).json({ token });
};

module.exports = { createLogin };
