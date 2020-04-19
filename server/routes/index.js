const path = require('path');
const basicAuth = require('express-basic-auth');
const recipeController = require('../controller/recipeController');
const householdsController = require('../controller/householdController');
const usersController = require('../controller/userController');
const wishlistController = require('../controller/wishlistController');
const env = process.env.NODE_ENV || 'development';

const authorize = basicAuth({
    users: { 'admin': env === 'test' ? 'admin_test' : 'admin' }
});

const setUpRoutes = (app, name, controller) => {
    app.get(`/${name}`, controller.list);
    app.post(`/${name}`, controller.create);
    app.get(`/${name}/:id`, controller.getById);
};

module.exports = (app, express) => {
    app.get('/landing', (req, res) => {
        res.sendFile(path.join(__dirname, '../', 'landing.html'));
    });

    app.get('/books/search', recipeController.search);
    setUpRoutes(app, 'books', recipeController);
};