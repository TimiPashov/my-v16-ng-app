const express = require('express');
const dataBaseConfig = require('./config/dataBase');


start();

async function start() {
    const app = express();
    await dataBaseConfig(app);

    app.listen(3000, () => { console.log('Listening on port 3000') });
}


