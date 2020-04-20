const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');
const td = require('testdouble');
const responses = require('../responses');
const Recipe = require('../models').recipe;
const controller = require('./recipeController');
const sinon = require('sinon')

describe('Recipe controller', () => {
  afterEach(() => {
    td.reset();
  });

  describe('When getting a list of recipes', () => {
    it('Should return ok', () => {
      const req = httpMocks.createRequest();
      const res = httpMocks.createResponse();
      // sinon.stub(Recipe, 'all).resolves({})
      const recipeStub = {}
      const recipeMock = sinon.stub().resolves(recipeStub)
      const getAll = {
        all: recipeMock
      }
      // const all = td.replace(Book, 'all');
      // td.when(all()).thenResolve({});

      // const ok = td.replace(responses, 'ok');

      // return controller.list(req, res).then(() => {
      //   td.verify(ok(res));
      // });
    });

    describe('When creating an object', () => {
      it('Should set status 200', () => {
        const req = httpMocks.createRequest({
          body: {
            name: 'New Recipe',
            mainIngredient: 'chicken',
            dishType: 'main',
            numIngredients: 6
          }
        });

        const res = httpMocks.createResponse();
        sinon.spy(Recipe, 'create')
        return controller.create(req, res).then(() => {
          return expect(Recipe.create.called).to.be.true;
        });
      });
    });
    describe('When getting a specific recipe', () => {
      afterEach(() => {
        td.reset();
      });
  
      it('Should return a status code 200', () => {
        const req = httpMocks.createRequest({
          params: {
            id: 1
          }
        });
  
        const res = httpMocks.createResponse();
        const find = sinon.stub(Recipe, 'findById')
        find.resolves({})
  
        return controller.getById(req, res).then(() => {
          return expect(res.statusCode).to.eql(200);
        });
      });
    });
  });
});