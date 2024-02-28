const express = require('express');
const dataBaseConfig = require('./config/dataBase');
const Article = require('./models/Article');

start();

async function start() {
    const app = express();
    await dataBaseConfig(app);
    const data = await Article.find({});

    app.get('/', (req, res) => {
        res.send(data);
    })

    app.listen(3000, () => { console.log('Listening on port 3000') });
}



