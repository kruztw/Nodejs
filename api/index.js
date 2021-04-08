const express = require("express");
const app = express();

const { api } = require("./fuck");
app.use("/api", api); 

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});
 
