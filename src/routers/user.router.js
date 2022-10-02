const express = require('express');
const userController = require('../controllers/user.controller');
const validateUserFields = require('../middlewares/validateUserFields');

const router = express.Router();

router.post('/', validateUserFields, userController.create);

module.exports = router;
