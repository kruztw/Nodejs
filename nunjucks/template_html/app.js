const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

var app = express()

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true, // auto reload if files (e.g. index.html) changed
});

app.get('/Hello', function(req, res, next) {
    res.render('hello.html', {
        name: 'kruz',
        surname: 'tw'
    });
});

app.get('/Hi', function(req, res, next) {
    res.render('hi.html', {
        name: 'tw',
        surname: 'kruz'
    });
});

app.listen(8888);
