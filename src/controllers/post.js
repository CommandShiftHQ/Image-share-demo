const { Posts } = require('../models');

exports.create = (req, res) => {
    const postData = req.body;
    postData.date = new Date();

    Posts.create(postData)
        .then(post => res.status(201).json(post))
        .catch((error) => res.status(500).json({ error }));
}

exports.read = (req, res) => {
    Posts.findAll({ where: req.query })
        .then(posts => res.status(200).json(posts))
        .catch((error) => res.status(500).json({ error }));
}

exports.update = (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    Posts.update(updateData, { where: { id } }).then(([rowsUpdated]) => {
        if (!rowsUpdated) {
            res.status(404).json({ error: 'post not found' });
        } else {
            res.status(200).json({ message: 'post updated' })
        }
    })
    .catch((error) => res.status(500).json({ error }));
}

exports.delete = (req, res) => {
    const { id } = req.params;
    Posts.destroy({ where: { id } }).then(rowsDeleted => {
        if (!rowsDeleted) {
            res.status(404).json({ error: 'post not found' });
        } else {
            res.status(200).json({ message: 'post deleted' })
        }
    })
    .catch((error) => res.status(500).json({ error }));
}