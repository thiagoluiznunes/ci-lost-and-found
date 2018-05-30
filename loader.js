import ServerClass from './config/server';
import ItemRoutes from './api/item/itemRoutes';
import UserRoutes from './api/user/userRoutes';
import database from './config/database';
import protect from './config/auth';

const server = new ServerClass(4000);
const item = new ItemRoutes();
const user = new UserRoutes();

item.initRoutes(server.getServer(), protect);
user.initRoutes(server.getServer());
database.dbConnection();
