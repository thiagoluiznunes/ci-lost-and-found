import express from 'express';
import itemQuerys from '../api/item/itemQuerys';
import itemService from '../api/item/itemService';

export default (server) => {
  // API Routes
  const router = new express.Router();
  server.use('/api', router);

  // Registering API methods in router
  itemService.register(router, '/item');

  // Search's routes
  router.get('/search-name/:name', itemQuerys.searchByName);
};
