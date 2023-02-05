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

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.locals;
    await userServices.deleteById(id);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getById, deleteById };
