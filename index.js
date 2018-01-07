var express = require('express')
var path = require('path')

var PORT = 3000;

var app = express();

app.get('*', express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
