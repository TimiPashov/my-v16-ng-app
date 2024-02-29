const express = require('express');
const cors = require('cors');
const dataBaseConfig = require('./config/dataBase');
const ArticleDB = require('./models/ArticleDB');

start();

async function start() {
    const app = express();

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    await dataBaseConfig(app);

    app.get('/', async (req, res, next) => {
        const data = await ArticleDB.find({});
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(data);
        next();
    })

    app.post('/', async (req, res) => {

        const article = req.body;
        await ArticleDB.create(article);
        res.redirect('http://localhost:4200/')
    })

    app.listen(3000, () => { console.log('Listening on port 3000') });
}




