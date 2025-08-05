const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

const filePath = path.join("db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);

const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.listen(3000, () => {
  console.log("Json server is running");
});

module.exports = server;
