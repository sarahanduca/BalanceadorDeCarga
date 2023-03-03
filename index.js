const express = require("express");
const axios = require("axios");
const roundRobin = require("./utils/roundRobin");

const app = express();
const processType = process.argv[2];
const roundRobinQueue = new roundRobin();

app.listen(3000, () =>
  console.log(`Listening on port 3000 - type: ${processType || "2"}`)
);

app.get("/", async (req, res) => {
  let server = "";
  if (processType != "1") {
    const requestType = req.headers["connection-type"];
    server =
      requestType == "TCP"
        ? "http://localhost:3001"
        : roundRobinQueue.connection();
    const request = await axios.get(server);
    return res.send(request.data);
  }
  server = roundRobinQueue.default();
  const request = await axios.get(server);
  console.log(server);
  return res.send(request.data);
});
