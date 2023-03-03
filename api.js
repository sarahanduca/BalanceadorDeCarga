const express = require("express");
const axios = require("axios");
const roundRobin = require("./utils/roundRobin");

const app = express();
const roundRobinQueue = new roundRobin();

app.listen(3000, () => console.log(`Listening on port 3000`));

app.get("/", async (req, res) => {
  try {
    const server = req.headers["connection-type"]
      ? roundRobinQueue.connection()
      : roundRobinQueue.default();

    if (req.headers["connection-type"]) {
      console.log(!roundRobinQueue.connectS1 ? "S1 connection-type: TCP" : "");
      console.log("S2 e S3 connection-type: UDP via round-robin");
    }
    const request = await axios.get(server);
    return res.send(request.data);
  } catch (err) {
    console.log(err.message);
  }
});
