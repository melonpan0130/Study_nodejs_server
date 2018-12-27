var express = require('express');
var app = express();

app.get('/topic', function(req, res){
    var topics = [
        'Javascripts is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output=`
        <a href="/topic?id=0">JavaScript</a><br />
        <a href="/topic?id=1">Nodejs</a><br />
        <a href="/topic?id=2">Express</a><br />
        ${topics[req.query.id]}`
    res.send(output);
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});