const crud = require('../crud');

function crudController(model, additionalMethods = {}) {
    return Object.assign({
        create: crud.create(model),
        list: crud.list(model),
        getById: crud.getById(model),
        deleteById: crud.deleteBy(model)
    }, additionalMethods);
}

module.exports = CrudController;
