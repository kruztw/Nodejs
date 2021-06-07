// curl -u admin:123 http://localhost:8888

// requests.get("http://localhost:8888/", auth=('admin', '123'))
// requests.post("http://localhost:8888/", json = {"key":"val"}, auth=('admin', '123'))

const app = require('express')()
const basicAuth = require('express-basic-auth')
const bodyParser = require('body-parser'); // 因為要示範如何在有 basicAuth 的情況 post json 

app.use(bodyParser.json()); // 沒加這行 req.body 會是空的

app.use(basicAuth({
    users: { 'admin': '123' }
}))

app.get('/', function(req, res) {
    res.send('home');
})

app.post('/', function(req, res) {
    console.log(req)
    res.send(req.body);
})


app.listen(8888);
