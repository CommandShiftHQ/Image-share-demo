const { Posts } = require('../models');

const get404Error = (model) => ({ error: `The ${model} could not be found.` });

const getModel = (model) => {
  const models = {
    posts: Posts,
  };
  return models[model];
};

const getAllItems = (res, model, query) => {
  const Model = getModel(model);

  return Model.findAll(query).then((items) => {
    res.status(200).json(items);
  });
};

const createItem = (res, model, item) => {
  const Model = getModel(model);

  return Model.create(item)
    .then((newItemCreated) => {
      res.status(201).json(newItemCreated);
    })
    .catch((error) => {
      const errorMessages = error.errors.map((e) => e.message);
      return res.status(400).json({ errors: errorMessages });
    });
};

const updateItem = (res, model, item, id) => {
  const Model = getModel(model);

  return Model.update(item, { where: { id } }).then(([recordsUpdated]) => {
    if (!recordsUpdated) {
      res.status(404).json(get404Error(model));
    } else {
      getModel(model)
        .findByPk(id)
        .then((updatedItem) => {
          res.status(200).json(updatedItem);
        });
    }
  });
};

const getItemById = (res, model, id) => {
  const Model = getModel(model);

  return Model.findByPk(id).then((item) => {
    if (!item) {
      res.status(404).json(get404Error(model));
    } else {
      res.status(200).json(item);
    }
  });
};

const deleteItem = (res, model, id) => {
  const Model = getModel(model);

  Model.destroy({ where: { id } }).then(rowsDeleted => {
    if (!rowsDeleted) {
      res.status(404).json(get404Error(model));
    } else {
      res.status(204).send();
    }
  });
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};