const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

var app = express()

var env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true, // auto reload if files (e.g. index.html) changed
});

env.addGlobal('sum', function(a,b) {
    return a+b;
});

env.addFilter('greater', function(a,b) {
    if (a > b)
        return "yes";
    return "no";
});

app.get('/', function(req, res, next) {
    res.render('index.html', {
        a: 1,
        b: 2,
        c: 3
    });
});

app.listen(8888);
