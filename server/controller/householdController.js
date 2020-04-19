const Household = require('../models').household;
const CrudController = require('./crudController');

module.exports = new CrudController(Household);