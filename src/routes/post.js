const express = require('express');
const postController = require('../controllers/post');
const { storeFile } = require('../middleware/store-file');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
  });

const router = express.Router();

router.route('/')
    .post(upload.single('file'), storeFile, postController.create)
    .get(postController.readAll);

router.route('/:id')
    .get(postController.read)
    .patch(postController.update)
    .delete(postController.delete);

module.exports = router;