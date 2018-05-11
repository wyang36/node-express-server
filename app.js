const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})


app.get('/', (req, res) => {
    res.render('index');
})


app.get('/api', (req, res) => {
    res.send({
        name: 'Jon Snow',
        age: 17
    });
})

app.get('/person/:id', (req, res) => {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.qstr
    })
})

app.post('/person', urlEncodedParser, (req, res) => {
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.listen(port);