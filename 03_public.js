var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello home page');
});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/apple.png">');
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});