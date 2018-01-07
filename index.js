var express = require('express')

var PORT = 3000;

var app = express();

app.get('*', function(req, res) {
  res.json({
    hello: 'world'
  })
})

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
