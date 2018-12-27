var express = require('express');
var app = express();

app.set('view engine', 'jade');// jade 템플릿 엔진을 세팅함
// 사용할 템플릿 엔진(view engine)을 express에게 알려줌
app.set('views','./views') // 템플릿이 있는 디렉토리를 express에게 알려줌
app.locals.pretty = true; // jade의 코드가 예뻐짐

app.get('/template', function(req, res){
    res.render('temp', {time: Date(), title: 'Jade'}); // temp라는 템플릿파일을 웹페이지로 렌더링해서 전송해줌
    // render는 두번째 인자로 객체를 전달한다.
    // jade 파일 내에서 time변수를 사용할 수 있게 된다.
});

app.listen(3000, function(){
    console.log('conneted 3000 port');
});