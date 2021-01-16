const {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
  } = require('./helpers');

exports.create = (req, res) => {
    createItem(res, 'posts', req.body);
}

exports.readAll = (req, res) => {
    getAllItems(res, 'posts', req.query);
}

exports.read = (req, res) => {
    getItemById(res, 'posts', req.params.id);
}

exports.update = (req, res) => {
    updateItem(res, 'posts', req.body, req.params.id);
}

exports.delete = (req, res) => {
    deleteItem(res, 'posts', req.params.id)
}