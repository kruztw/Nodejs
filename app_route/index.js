const express = require("express");
const app = express();

app.route("/").get(function (req, res) {
    res.send("GET");
})
.post(function (req, res) {
    res.send("POST");
})
.put(function (req, res) {
    res.send("PUT");
});

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});
 
