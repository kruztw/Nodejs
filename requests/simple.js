var request = require('request');

var headers = {
  'Content-Type' : 'application/x-www-form-urlencoded',
};

function callback(error, response, body) {
    if(!error && response.statusCode == 200) 
        console.log(body);
}


var options = {
    url : 'http://www.example.com',
    method : 'GET',
    headers : headers
};

request(options, callback);
