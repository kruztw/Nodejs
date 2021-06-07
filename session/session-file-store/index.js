var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var app = express();

// https://www.npmjs.com/package/session-file-store
var FileStoreOptions = {
    logFn: function(){
        console.log("log");
    },
    reapInterval: 5,
}

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new FileStore(FileStoreOptions,),
    cookie: { maxAge: 360000,secure: false, httpOnly: true }
  })
);

app.get('/', function (req, res) {
    if (req.session.views) {
        req.session.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + req.session.views + '</p>');
        res.end();
    }
    else {
        req.session.views = 1;
        res.end('Welcome to the file session demo. Refresh page!');
    }
});

var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
