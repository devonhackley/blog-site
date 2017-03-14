'use strict';

require('dotenv');
const server = require('./server');

server.listen(process.env.PORT, () => {
  console.log('server is up and running on port: ', process.env.PORT);
});
