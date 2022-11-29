const http = require("http");
const app = require("./index");
const PORT = process.env.PORT || 8000;
const database = require("../database/connection");
async function startServer() {
  const server = await http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
  });
}

startServer();
