const port = 4000;
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

module.exports = server;
