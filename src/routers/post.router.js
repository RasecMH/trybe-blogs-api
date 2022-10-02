const express = require('express');
const postController = require('../controllers/post.controller');
const validatePostFields = require('../middlewares/validatePostFields');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, validatePostFields, postController.create);
router.get('/', authToken, postController.getAll);

module.exports = router;
