var http = require('http')

var PORT = 3000;

var app = http.createServer();

app.addListener('request', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.write('{"hello": "world"}');
  res.end();
});

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
