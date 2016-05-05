var express = require('express');
var PORT = 3000;
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
  console.log('Express Server Started on port ' + PORT);
});
