const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})


app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
    <link href="assets/style.css" rel="stylesheet" />
    </head>
    <body>
    <h1>test div</h1>
    </body>
    </html>`);
})


app.get('/api', (req, res) => {
    res.send({
        name: 'Jon Snow',
        age: 17
    });
})

app.get('/person/:id', (req, res) => {
    res.send(`
    <html>
    <head>
    </head>
    <body>
    <div>this is a person: ${req.params.id}</div>
    </body>
    </html>`);
})

app.listen(port);