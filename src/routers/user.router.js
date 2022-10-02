const express = require('express');
const userController = require('../controllers/user.controller');
const authToken = require('../middlewares/authToken');
const validateUserFields = require('../middlewares/validateUserFields');

const router = express.Router();

router.post('/', validateUserFields, userController.create);
router.get('/', authToken, userController.getAll);

module.exports = router;
