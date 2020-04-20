const responses = require('../responses');
const CrudController = require('./crudController');

const Recipe = require('../models').recipe;

  module.exports = new CrudController(Recipe, {
      updateById: (req, res) => {
          return Recipe
              .findById(req.params.id)
              .then((acct) => {
                  return acct
                      .update(req.body, {
                          where: {
                              id: req.params.id
                          },
                          fields: ['name', 'mainIngredient', 'dishType', 'numIngredients']
                      })
              })
      },

      search: (req, res) => {
        let where = {}
        if (req.query.title) {
            where.name = {
                $ilike: `%${req.query.name}%`
            }
        }

        if (req.query.mainIngredient) {
            where.mainIngredient = {
                $ilike: `%${req.query.mainIngredient}%`
            }
        }

        return Recipe
         .findAll(query)
         .then(responses.ok(res))
         .catch(responses.serverError(res));
      }
  })
