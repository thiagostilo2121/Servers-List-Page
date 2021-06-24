const express = require('express');
const path = require('path');

const app = express();
const port = 'https://thiagostilo2121.github.io/Servers-List-Page/'

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/lol', function(req, res) {
  res.sendFile(path.join(__dirname, './server.html'));
});


app.listen(port);
console.log('Server started at ' + port);