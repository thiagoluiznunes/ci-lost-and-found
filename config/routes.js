const express = require('express');
const itemQuerys = require('../api/item/itemQuerys');

module.exports = function(server) {
  // API Routes
  const router = new express.Router();
  server.use('/api', router);

  // Registering API methods in router
  const itemService = require('../api/item/itemService');
  itemService.register(router, '/item');

  // Search's routes
  router.get('/search-name/:name', itemQuerys.searchByName);
};

  // require('../api/item/itemRoutes')(router, itemQuerys);
