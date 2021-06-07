var express = require("express");
var app = express();
var ejs = require('ejs')

app.get("/", async (req, res) => {
    const msg1 = "hello";
    const msg2 = "world";
    const html = await ejs.renderFile(__dirname + "/templates/index.ejs", {msg1, msg2})
    res.end(html)
})


app.listen(8888);                  
