const express = require('express');

const createServer = (port) => {
    const app = express();
    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });
    
    app.get('/', (req, res) => {
        res.send('Port:' + port == 3001 ? 'S1' : port == 3002 ? 'S2' : 'S3')
    })
}

module.exports = createServer;