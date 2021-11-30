// hbs: handlebars

const express = require("express");
const PORT = 8888;
const app = express();

app.set('view engine', 'hbs');
app.get("/", (req, res) => res.render("index", {user: "kruztw"}));

app.listen(PORT, () => {
    console.log(`safestorage chall listening on port ${PORT}`);
});
