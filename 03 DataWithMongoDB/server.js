const http = require('http');
const app = require('./app'); //add app.js

//set port to default app server enviroment port. If is not setted; will set that
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);