const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const validateCategoriesFields = require('../middlewares/validateCategoriesFields');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, validateCategoriesFields, categoriesController.create);

module.exports = router;
