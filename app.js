const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./server/routes')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', routes)

require('./server/routes/')(app, express);

app.get('*', (req, res) => res.status(404).send());

module.exports = app