const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.clearCookie("key");
    res.cookie("key", Math.random(), {path:'/', httpOnly: false});
    res.send("hello world");
});

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});
 
