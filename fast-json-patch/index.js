var express = require("express");
var app = express();
var ejs = require('ejs');
const jsonpatch = require('fast-json-patch')

let msg = {
    say: "hello",
    who: "world"
}

app.get("/", async (req, res) => {
    const html = await ejs.renderFile(__dirname + "/templates/index.ejs", {msg})
    res.end(html);
});

app.get('/patch', (req, res) => {
    let patch = []
    patch.push({
        "op": "replace",
        "path": "/who",
        "value": "kruztw"
    });

    jsonpatch.applyPatch(msg, patch)
    res.json(msg)
});


app.listen(8888);                  
