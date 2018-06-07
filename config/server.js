import bodyParser from 'body-parser';
import queryParser from 'express-query-int';
import express from 'express';
import allowCors from './cors';
import auth from '../config/auth';
import ItemRoutes from '../api/item/itemRoutes';
import UserRoutes from '../api/user/userRoutes';

// Singleton Pattern
let port = 4000;
const server = express();
const item = new ItemRoutes();
const user = new UserRoutes();

const initServer = (p) => {
  port = p;
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(allowCors);
  server.use(queryParser());

  server.listen(process.env.PORT || port, () => console.log('Listening on: ', port));
};

const initRoutes = () => {
  item.initRoutes(server, auth.protect);
  user.initRoutes(server);
};

const getPort = () => port;
const getServer = () => server;
const setPort = (newport) => {
  port = newport;
};

export default { initServer, initRoutes, getServer, getPort, setPort };
