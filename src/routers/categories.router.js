const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, categoriesController.create);

module.exports = router;
