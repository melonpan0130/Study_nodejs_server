var express = require('express');
var app = express();

// 사용자가 웹 서버에 접속했을 때의 방식
// get방식으로 접속한 사람에게 함수가 실행됨

// http://localhost:3000/
app.get('/', function(req, res) { // 콜백 함수
    // 사용자 요청, 응답에 대한 객체
    res.send('Hello home page');// 이 값을 응답할것이야
});

// http://localhost:3000/login
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});