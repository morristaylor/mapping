var express = require('express')

var app = express()

const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.sendFile('./public/', {root : __dirname});
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
