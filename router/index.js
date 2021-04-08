const express = require("express");
const app = express();
const myRoute = require("./myRoute");

// http://localhost:8888/foo/about
app.use("/foo", myRoute);
app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});
 
