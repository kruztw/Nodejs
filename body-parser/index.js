// curl -X POST -H "Content-Type: application/json" --data '{"key1":"val1", "key2":"val2"}'   http://localhost:8888

var express = require("express");
var app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // 沒加這行 req.body 會是空的

app.post("/", function (req, res) {
    res.send(req.body);
});

app.listen(8888);                  
