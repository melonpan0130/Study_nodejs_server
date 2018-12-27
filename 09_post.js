var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));
app.get("/form", function(req, res){
    res.render('form');
});

// post방식으로 전송한 내용을 받아옴
app.post('/form_receiver', function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+", "+description+" 안녕!");
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});