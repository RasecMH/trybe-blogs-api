const userServices = require('../services/user.service');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userServices.create(
      displayName,
      email,
      password,
      image,
    );
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res) => {
    const users = await userServices.getAll();
    return res.status(200).json(users);
};

module.exports = { create, getAll };
