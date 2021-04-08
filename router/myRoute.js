const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("home");
});

router.get("/about", function (req, res) {
    res.send("about");
});

module.exports = router; 
