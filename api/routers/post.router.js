const express = require('express');
const postController = require('../controllers/post.controller');
const validatePostFields = require('../middlewares/validatePostFields');
const validatePostUpdate = require('../middlewares/validatePostUpdate');
const authToken = require('../middlewares/authToken');

const router = express.Router();

router.post('/', authToken, validatePostFields, postController.create);
router.get('/search', authToken, postController.getByQuery);
router.get('/', authToken, postController.getAll);
router.get('/:id', authToken, postController.getById);
router.put('/:id', authToken, validatePostUpdate, postController.updateById);
router.delete('/:id', authToken, postController.deleteById);

module.exports = router;
