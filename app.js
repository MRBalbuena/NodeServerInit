var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('Welcome to Books API');
});

app.listen(port, function(){
    console.log('Running Books API on port' +  port);
})