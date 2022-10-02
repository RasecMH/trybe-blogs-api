const express = require('express');
const loginController = require('../controllers/login.controller');
const validateLoginFields = require('../middlewares/validateLoginFields');

const router = express.Router();

router.post('/', validateLoginFields, loginController.createLogin);

module.exports = router;
