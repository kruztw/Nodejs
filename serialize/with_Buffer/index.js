var serialize = require('node-serialize');

var serialized_info = '{"key":"val"}'; // key value 要用雙引號才能 unserialize
var encoded_data = new Buffer.from(serialized_info).toString('base64');
console.log(encoded_data);

var str = new Buffer.from(encoded_data, 'base64').toString();
var data = serialize.unserialize(str);
console.log(str);
console.log(data);
