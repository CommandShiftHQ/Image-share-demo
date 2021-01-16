const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.route('/')
    .post(postController.create)
    .get(postController.readAll);

router.route('/:id')
    .get(postController.read)
    .patch(postController.update)
    .delete(postController.delete);

module.exports = router;