/**
 * @author  Thiago Luiz
 * @version 1.0
 * @since   2018-02-01
 */

import server from './config/server';
import database from './config/database';

server.initServer(4000);
server.initRoutes();
database.initConnection('mongodb');
