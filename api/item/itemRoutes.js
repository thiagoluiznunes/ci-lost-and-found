import express from 'express';
import service from './itemService';
import query from './itemQuerys';

class ItemRoutes {
  constructor() {
    const router = new express.Router();

    this.initRoutes = (server) => {
      server.use('/oapi', router);
      service.register(router, '/item');
      router.get('/search-name/:name', query.searchByName);
    };
  }
}

export default ItemRoutes;
