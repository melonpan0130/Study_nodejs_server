var express = require('express');
var app = express();

app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascripts is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output=`${topics[req.params.id]}`;
    res.send(output);
});

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+', '+req.params.mode);
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});