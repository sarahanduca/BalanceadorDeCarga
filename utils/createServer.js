const express = require("express");

const createServer = (port) => {
  const app = express();
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });

  app.get("/", (req, res) => {
    const stringPort = port.toString();
    res.send("S" + stringPort[3]);
  });
};

module.exports = createServer;
