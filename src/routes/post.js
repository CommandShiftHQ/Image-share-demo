const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router
    .route('/')
    .post(postController.create);

module.exports = router;