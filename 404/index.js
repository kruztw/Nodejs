var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("home");
});

app.use(function(req, res) {
    res.status(404);
    res.send("not_found");
});

app.listen(8888);                  
