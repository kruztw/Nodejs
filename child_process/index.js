var child = require('child_process');

child.exec('ls /', function(error, stdout, stderr) { console.log(stdout) });
