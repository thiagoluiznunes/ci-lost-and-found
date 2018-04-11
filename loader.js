import ServerClass from './config-oo/server';
import ItemRoutes from './api/item/itemRoutes';
import UserRoutes from './api/user/userRoutes';
import DataBase from './config-oo/database';

const server = new ServerClass(4000);
const item = new ItemRoutes();
const user = new UserRoutes();
const db = new DataBase();

item.initRoutes(server.getServer());
user.initRoutes(server.getServer());
db.dbConnection();
