const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

var app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true, // auto reload if files (e.g. index.html) changed
});

app.get('/', function(req, res, next) {
    res.render('index.html', {
        name: 'kruztw'
    });
});

app.listen(8888);
