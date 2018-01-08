var express = require('express')
var proxy = require('express-http-proxy')
var path = require('path')
var bodyParser = require('body-parser');

var PORT = 3000;
var NOTES_URL = '/notes';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var notes = [];

app.post('/notes', function(req, res) {
  var note = req.body.note;
  notes.push(note);
  res.json({value: note});
});

app.get('/notes', function(req, res) {
  res.json({notes: notes});
});

app.delete(NOTES_URL, function(req, res) {
    res.json({
      status: 'deleted'
    })
});

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
