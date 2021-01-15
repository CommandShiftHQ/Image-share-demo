const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.route('/')
    .post(postController.create)
    .get(postController.read);

router.route('/:id')
    .patch(postController.update)
    .delete(postController.delete);

module.exports = router;