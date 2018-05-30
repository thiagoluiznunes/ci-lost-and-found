import ServerClass from './config/server';
import ItemRoutes from './api/item/itemRoutes';
import UserRoutes from './api/user/userRoutes';
import DataBase from './config/database';
import protect from './config/auth';

const server = new ServerClass(4000);
const item = new ItemRoutes();
const user = new UserRoutes();
const db = new DataBase();

item.initRoutes(server.getServer(), protect);
user.initRoutes(server.getServer());
db.dbConnection();
