const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.listen(3000, () => {
  console.log("Json server is running");
});

module.exports = server;
