const crud = require('../crud');

function crudController(model, additionMethods = {}) {
    return Object.assign({
        create: crud.create(model),
        list: crud.list(model),
        getById: crud.getById(model),
        deleteById: crud.deleteBy(model)
    }, additionMethods);
}

module.exports = CrudController;
