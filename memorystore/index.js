// 參考: https://www.npmjs.com/package/memorystore
// 將 session 存在 memorystore, 並透過 period 避免 memory leak (沒在用的 session 佔據 memory 不能釋放)

var session = require('express-session')
var MemoryStore = require('memorystore')(session)

app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))
