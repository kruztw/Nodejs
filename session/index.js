const express = require("express");
const session = require("express-session");
const app = express();

app.use(
    session({
        cookie: {
            domain: "fuck.com",
            path: "/",
            httpOnly: true,
            secure: true,
            maxAge: null,
            sameSite: "none",
        },
      
        secret: Math.random,
        name: "sessionId",
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/", (req, res) => {
   res.send(req.session);
});

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});


