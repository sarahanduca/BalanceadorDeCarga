const axios = require('axios');

async function main() {
    for (let i = 0; i < 5; i++) {
        await axios.get('http://localhost:3000', {headers: {"conection-type": 'UDP'}})
            .then((res) =>{
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}

main();