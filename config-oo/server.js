import bodyParser from 'body-parser';
import queryParser from 'express-query-int';
import express from 'express';
import allowCors from './cors';

class ServerClass {
  constructor(p) {
    const port = p;
    const server = express();

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(allowCors);
    server.use(queryParser());

    server.listen(process.env.PORT || port, () => console.log('Listening on: ', port));

    this.getPort = () => port;
    this.getServer = () => server;
    this.setPort = (newport) => {
      this.port = newport;
    };
  }
}

export default ServerClass;
