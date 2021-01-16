const  { uploadFile } = require('../services/s3');

exports.storeFile = (req, res, next) => {
    uploadFile(req.file)
        .then((imageUrl) => {
            req.body.imageUrl = imageUrl;
            next();
        })
        .catch(error => {
            res.status(500).json({ error: error })
        })
}