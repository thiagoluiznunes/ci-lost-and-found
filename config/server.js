import bodyParser from 'body-parser';
import queryParser from 'express-query-int';
import express from 'express';
import allowCors from './cors';
import auth from '../config/auth';

import UserFactoryRoutes from '../api/user/userFactoryRoutes';
import ItemFactoryRoutes from '../api/item/itemFactoryRoutes';

// Singleton Pattern
let port = 4000;
const server = express();

const initServer = (p) => {
  port = p;
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(allowCors);
  server.use(queryParser());

  server.listen(process.env.PORT || port, () => console.log('Listening on: ', port));
};

// Facade Pattern
const initRoutes = () => {
  const userFactory = new UserFactoryRoutes();
  const userRegisterRoutes = userFactory.createRoutesClass('register');

  const itemFactory = new ItemFactoryRoutes();
  const itemPostRoutes = itemFactory.createRoutesClass('post');

  itemPostRoutes.initRoutes(server, auth.protect);
  userRegisterRoutes.initRoutes(server);
};

const getPort = () => port;
const getServer = () => server;
const setPort = (newport) => {
  port = newport;
};

export default { initServer, initRoutes, getServer, getPort, setPort };
