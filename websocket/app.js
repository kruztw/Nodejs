let fileSystem = require('fs');
let path = require('path');
let http = require('http');


let server = http.createServer(function(req, res) {
    let filePath = path.join(__dirname, 'index.html');
    let stat = fileSystem.statSync(filePath);
    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': stat.size});
    fileSystem.createReadStream(filePath).pipe(res);
});

server.listen(8888, () => {
    console.log('server listens at 8888');
});

const WebSocketServer = require('websocket').server
let wsServer = new WebSocketServer({httpServer: server, autoAcceptConnections: false});


wsServer.on('request', function(request) {
    let connection = request.accept('greet', request.origin);
    connection.on('message', function(message) {
        console.log(message);
        connection.sendUTF(JSON.stringify({type: "reply", content: {username: "app.js", msg: "hello"}}));
    });
});

