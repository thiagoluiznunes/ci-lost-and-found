import bodyParser from 'body-parser';
import queryParser from 'express-query-int';
import express from 'express';
import allowCors from './cors';

// Singleton Pattern
const server = express();
let port = 4000;

const initServer = (p) => {
  port = p;
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(allowCors);
  server.use(queryParser());

  server.listen(process.env.PORT || port, () => console.log('Listening on: ', port));
};

const getPort = () => port;
const getServer = () => server;
const setPort = (newport) => {
  port = newport;
};

export default { initServer, getServer, getPort, setPort };
