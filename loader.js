import server from './config/server';
import database from './config/database';

server.initServer(4000);
server.initRoutes();
database.dbConnection();
