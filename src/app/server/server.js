const express = require('express');
const dataBaseConfig = require('./config/dataBase');
const ArticleDB = require('./models/ArticleDB');

start();

async function start() {
    const app = express();
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    await dataBaseConfig(app);

    app.get('/', async (req, res) => {
        const data = await ArticleDB.find({});
        res.send(data);
    })

    app.post('/', async (req, res) => {

        const article = req.body;
        await ArticleDB.create(article);
        console.log(article)
        res.redirect('http://localhost:4200/')
    })

    app.listen(3000, () => { console.log('Listening on port 3000') });
}




