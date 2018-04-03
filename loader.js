// const server = require('./config/server');
const ServerClass = require('./config-oo/server');
const RoutesClass = require('./config-oo/routes');

let server = new ServerClass(4000);
let routes = new RoutesClass(server.getServer());

routes.addAPIMethod('api/item/itemService', '/item');

routes.startAPIRoutes();
routes.startAPISearch();

require('./config/database');
