var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log('incoming request at'+ new Date());
    next();
});

app.get('/', function (req, res) {
//throw new Error("blæh");
  res.send('Hello World!');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

});

