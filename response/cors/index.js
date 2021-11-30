var express = require("express");
var cors = require('cors')
var app = express();

app.use(cors({
    origin: 'http://localhost:6666',
    credentials: true,                // Access-Control-Allow-Credentials: true
}))

app.get("/", function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("home");
});

app.listen(8888);                  
