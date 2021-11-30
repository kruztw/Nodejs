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
