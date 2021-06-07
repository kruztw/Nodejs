// http://localhost:8888/myFolder/

var express = require("express");
var app = express();

app.use("/myFolder", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
    res.send("home");
});

app.listen(8888);                  
