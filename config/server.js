// BODY parse of requistion
import bodyParser from 'body-parser';
import express from 'express';
import queryParser from 'express-query-int';
import allowCors from './cors';

const server = express();
const port = 4000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(process.env.PORT || port, () => {
  console.log('Listening on');
});

export default server;
