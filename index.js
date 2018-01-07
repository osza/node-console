var express = require('express')
var proxy = require('express-http-proxy')
var path = require('path')

var PORT = 3000;

var app = express();

var frontend;
if (process.env['PRODUCTION']) {
  frontend = express.static(path.resolve(__dirname, 'dist'))
} else {
  frontend = proxy('http://localhost:8080')
}
app.get('*', frontend)

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
