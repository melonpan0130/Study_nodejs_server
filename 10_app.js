var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', './10_app');
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
    fs.readdir("data", function(err, files) {
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        var id = req.params.id;
        if(id){
            // id값이 있을 때
            fs.readFile('data/'+id, 'utf-8', function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send("Internal Server Error");
                }
                res.render('view', {topics:files, title:id, description:data}); // view.jade
            }); // read file
        } else {
            // id 값이 없을 때
        res.render('view', {topics:files, title:'Welcome', description: 'Hello, JavaScript for server.'}); 
        // view라는 템플릿 파일안으로 주입하고자 하는 데이터를 객체로 두번째 인자로 넣음
        }// else
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