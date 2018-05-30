import express from 'express';
import service from './itemService';
import querys from './itemQuerys';

class ItemRoutes {
  constructor() {
    const closedApi = new express.Router();
    const openApi = new express.Router();

    this.initRoutes = (server, protect) => {
      server.use('/oapi', openApi); // Crrate name to Open API
      openApi.get('/item', querys.getAll);

      server.use('/api', closedApi); // Create name to closed API
      closedApi.use(protect); // Add middleware
      service.register(closedApi, '/item'); // Register CRUD in API
    };
  }
}

export default ItemRoutes;
