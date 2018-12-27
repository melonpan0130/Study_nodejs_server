var express = require('express');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'eun01300714',
    database : 'o2'
});

conn.connect(); // 연결함(시작)

var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.locals.pretty = true;
app.use('/user', express.static('uploads'));
app.set('views', './12_DB');
app.set('view engine', 'jade');

// 1
app.get('/topic/new', function(req, res) {
    fs.readdir("data", function(err, files) {
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        res.render('new', {topics:files});
    });
});

// 2
app.get(["/topic","/topic/:id"], function(req, res){
    var sql = 'SELECT id, title FROM topic;';
    conn.query(sql, function(err, rows, fields){
        res.render('view', {topics:files, title:id, description:data});
    });

});

app.post("/topic", function(req, res) {
    var title = req.body.title;
    var description = req.body.description;
    //파일 이름으로 title, 내용으로 description, 마지막으로 콜백함수를 작성    
    // 존재하지 않는 파일일 경우에는 에러 발생 -> Internal Server Error
    fs.writeFile('data/'+title, description, function(err) {
        if(err){    
            console.log(err);
            res.status(500).send("Internal Server Error★"+err);
        }
        res.redirect('/topic/'+title); // 보내버림
    });    
});

app.listen(3000, function() {
    console.log("connected 3000 port!");
});