import express from 'express';
import service from '../../api/item/itemService';
import query from '../../api/item/itemQuerys';

class ItemRoutes {
  constructor(server) {
    const router = new express.Router();

    server.use('/api', router);
    service.register(router, '/item');
    router.get('/search-name/:name', query.searchByName);
  }
}

export default ItemRoutes;
