// import express from 'express';
// import service from './itemService';
// import querys from './itemQuerys';

// class ItemRoutes {
//   constructor() {
//     const closedApi = new express.Router();
//     const openApi = new express.Router();

//     // Facade Pattern
//     this.initRoutes = (server, protect) => {
//       server.use('/oapi', openApi);
//       openApi.get('/item', querys.getAll);

//       server.use('/api', closedApi);
//       closedApi.use(protect);
//       service.register(closedApi, '/item');
//     };
//   }
// }

// export default ItemRoutes;
