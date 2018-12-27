var express = require('express');
var app = express();

app.use(express.static('public'));

// node를 실행시킬 떄 다시 실행해야함 
app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0;i<5; i++)
        lis=lis+'<li>coding</li>';
    var time = Date();
    var output = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Static</title>
        </head>
        <body>
            <h1>Hello, Dynamic!</h1>
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
    </html>`;
    res.send(output);
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});