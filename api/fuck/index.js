const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
    res.json([{ id: 1,},]);
});

module.exports = { api }; 
