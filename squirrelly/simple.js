// https://github.com/squirrellyjs/squirrelly

const sqrl = require('squirrelly');
var express = require("express");
const app = express();

app.get('/', function(req, res) {
    console.log("call me")
    var myTemplate = "<p>My favorite kind of cake is: {{it.favoriteCake}}</p>"
    res.render('index.squirrelly', {'output': 'Chocolate!'})
});

app.listen(8888);                  
