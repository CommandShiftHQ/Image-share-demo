const { Post } = require('../models');

exports.create = (req, res) => {
    const postData = req.body;
    postData.date = new Date();

    Post.create(postData).then((post) => res.status(201).json(post));
}