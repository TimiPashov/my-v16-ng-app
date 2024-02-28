const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from server')
})



app.listen(3000, 'Listening on port 3000', () => { console.log('Listening on port 3000') });