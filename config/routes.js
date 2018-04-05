const express = require('express');
const itemQuerys = require('../api/item/itemQuerys');
const itemService = require('../api/item/itemService');

module.exports = (server) => {
  // API Routes
  const router = new express.Router();
  server.use('/api', router);

  // Registering API methods in router
  itemService.register(router, '/item');

  // Search's routes
  router.get('/search-name/:name', itemQuerys.searchByName);
};
