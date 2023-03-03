const axios = require("axios");
const processType = process.argv[2];

async function main() {
  for (let i = 0; i < 5; i++) {
    await axios
      .get("http://localhost:3000", {
        headers: { "connection-type": !!processType },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

main();

// teste recebe os argumentos, se 1, headers: { "connection-type": false} e trata no index,
// se 2 (ou outro), headers: { "connection-type": true} e trata no index com S1 TCP e S2, S3 UDP
// S1 enviar conexão TCP apenas uma vez, no caso ta mandando i vezes
