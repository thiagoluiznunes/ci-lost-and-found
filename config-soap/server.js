class ServerClass {
  constructor(p) {
    const port = p;
    // BODY parse of requistion
    const bodyParser = require('body-parser');
    const express = require('express');
    const allowCors = require('./cors');
    const queryParser = require('express-query-int');
    const server = express();

    server.use(bodyParser.urlencoded({extended: true}));
    server.use(bodyParser.json());
    server.use(allowCors);
    server.use(queryParser());

    server.listen(process.env.PORT || port, () => {
      console.log('Listening on');
    });

    this.getPort = () => port;
    this.getServer = () => server;

    this.setPort = (p) => {
      port = p;
    };
  }
}

module.exports = ServerClass;
