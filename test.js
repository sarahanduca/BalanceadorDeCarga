const axios = require('axios');

async function main() {
    for (let i = 0; i < 2; i++) {
        await axios.get('http://localhost:3000')
            .then((res) =>{
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
}

main();