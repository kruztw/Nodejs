const express = require("express");
const session = require("express-session");
const app = express();

app.use(
    session({
        cookie: {
            domain: "",
            path: "/",
            httpOnly: true,
            secure: false,  // https ?
            maxAge: null,
            //sameSite: "none",  // sameSite = none => secure = true  (可透過 F12 Network localhost 封包的 cookie 得知)
        },
      
        secret: "sdfsdklfjdskfjsdlkf/",
        name: "sessionId",
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/", (req, res) => {
   console.log(req.session);
   if (typeof req.session.view === "number")
       req.session.view++;
   else
       req.session.view = 0;
   
   res.send(`<h1>Visit: ${req.session.view}</h1>`);
});

app.listen("8888", () => {
   console.log("app listening at http://localhost:8888");
});


