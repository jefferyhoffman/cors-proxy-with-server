var express = require("express");
var corsAnywhere = require("cors-anywhere");

var host = process.env.IP || '0.0.0.0';
var port = parseInt(process.env.PORT) || 8080;
var proxyPort = port + 1

var app = express();
app.use(express.static('public'));

app.listen(port, host, function() {
    console.log('==> Static server listening on ' + host + ':' + port);
});

corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(proxyPort, host, function() {
    console.log('==> CORS Anywhere proxy listening on ' + host + ':' + proxyPort);
});
