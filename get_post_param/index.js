const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// http://localhost:8888/?arg=abc
app.get("/", (req, res) => {
    res.send(req.query.arg);
});

// arg=abc
app.post("/", (req, res) => {
    res.send(req.body.arg);
});

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});
 
