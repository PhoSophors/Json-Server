const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const user = jsonServer.router('user.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.use(user);

server.listen(port);