// const server = require('./config/server');
const ServerClass = require('./config-soap/server');

let server = new ServerClass(4000);

require('./config/database');
require('./config/routes')(server.getServer());
