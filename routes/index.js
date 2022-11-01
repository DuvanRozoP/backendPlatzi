const productsRouter = require('./products.router');
const routerCategories = require('./categories.router');
const routerUsers = require('./users.router');
const express = require('express');

function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1',router);

  router.use('/products',productsRouter);
  router.use('/categories',routerCategories);
  router.use('/users',routerUsers);
}

module.exports = routerApi;
