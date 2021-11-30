// https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it

var express = require('express');
var app = express();

// Set the ip-address of your trusted reverse proxy server such as 
// haproxy or Apache mod proxy or nginx configured as proxy or others.
// The proxy server should insert the ip address of the remote client
// through request header 'X-Forwarded-For' as
// 'X-Forwarded-For: some.client.ip.address'
// Insertion of the forward header is an option on most proxy software
app.set('trust proxy', '127.0.0.1');

app.get('/', function(req, res){
  var ip = req.ip; // trust proxy sets ip to the remote client (not to the ip of the last reverse proxy server)
  
  // req.ip and req.protocol are now set to ip and protocol of the client, not the ip and protocol of the reverse proxy server
  // req.headers ['x-forwarded-for'] is not changed
  // req.headers['x-forwarded-for'] contains more than 1 forwarder when
  // there are more forwarders between the client and nodejs.
  // Forwarders can also be spoofed by the client, but 
  // app.set('trust proxy') selects the correct client ip from the list
  // if the nodejs server is called directly, bypassing the trusted proxies,
  // then 'trust proxy' ignores x-forwarded-for headers and
  // sets req.ip to the remote client ip address
  res.json({"ip": ip, "protocol": req.protocol, "headers": req.headers['x-forwarded-for']});
});

app.listen(8888);
