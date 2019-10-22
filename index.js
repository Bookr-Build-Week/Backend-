require('dotenv').config();

const server = require ('./api/server');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
server.listen(port);