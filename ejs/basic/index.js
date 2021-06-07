var express = require("express");
var app = express();
var ejs = require('ejs')

app.get("/", (req, res) => {
    const msg1 = "hello";
    const msg2 = "world";
    res.render('index.ejs', {"say":msg1, "who":msg2})
})


app.listen(8888);                  
