import ServerClass from './config-oo/server';
import ItemRoutes from './api/item/itemRoutes';
import UserRoutes from './api/user/userRoutes';
import DataBase from './config-oo/database';
import Authorization from './config-oo/auth';

const server = new ServerClass(4000);
const item = new ItemRoutes();
const user = new UserRoutes();
const db = new DataBase();
const auth = new Authorization();

item.initRoutes(server.getServer(), auth.protect);
user.initRoutes(server.getServer());
db.dbConnection();
