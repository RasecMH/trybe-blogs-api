const express = require('express');
const userController = require('../controllers/user.controller');
const authToken = require('../middlewares/authToken');
const validateUserFields = require('../middlewares/validateUserFields');

const router = express.Router();

router.post('/', validateUserFields, userController.create);
router.get('/', authToken, userController.getAll);
router.get('/:id', authToken, userController.getById);
router.delete('/me', authToken, userController.deleteById);

module.exports = router;
