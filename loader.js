import server from './config/server';
import ItemRoutes from './api/item/itemRoutes';
import UserRoutes from './api/user/userRoutes';
import database from './config/database';
import auth from './config/auth';

const item = new ItemRoutes();
const user = new UserRoutes();

server.initServer(4000);
item.initRoutes(server.getServer(), auth.protect);
user.initRoutes(server.getServer());
database.dbConnection();
