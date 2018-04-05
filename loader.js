import ServerClass from './config-oo/server';
import ItemRoutes from './config-oo/routes/item-routes';
import DataBase from './config-oo/database';

const server = new ServerClass(4000);
const item = new ItemRoutes(server.getServer());
const db = new DataBase();

db.dbConnection();
