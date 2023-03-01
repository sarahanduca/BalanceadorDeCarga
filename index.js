const express = require('express');
const axios = require('axios');
const roundRobin = require('./roundRobin');

const app = express();
const args = process.argv[2]
const counter = new roundRobin();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/', async (req, res) => {
    if (args === '1') { 
        const url = counter.traditional();
        const request = await axios.get(url)
        return res.send(request.data)
    }
    else {
        const requestType = req.headers['conection-type'];
        let url = '';
        if (requestType === 'TCP') {
            url = 'http://localhost:3001'
        }
        else if (requestType === 'UDP') {
            url = counter.conectionType()
        }
        const request = await axios.get(url)
        return res.send(request.data)
        
    }
})
