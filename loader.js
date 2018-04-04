'use strict';

// const server = require('./config/server');
const ServerClass = require('./config-oo/server');
const RoutesClass = require('./config-oo/routes');
const DataBase = require('./config-oo/database');

let server = new ServerClass(4000);
let routes = new RoutesClass(server.getServer());
let db = new DataBase();

routes.addAPIMethod('api/item/itemService', '/item');
routes.startAPIRoutes();
routes.startAPISearch();

db.dbConnection();
