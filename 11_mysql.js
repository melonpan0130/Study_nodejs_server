var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'eun01300714',
    database : 'o2'
});

conn.connect(); // 연결함(시작)
var sql;
//select
/* var sql = 'SELECT * FROM topic';
conn.query(sql, function(err, rows, fields){
    if(err) console.log(err);
    else {
        for(var i=0; i<rows.length; i++){
            console.log(rows[i].author);
        }
    }
});*/


// insert
/*
var sql = 'INSERT INTO topic (title, description, author) VALUES("Experss", "Web framework", "duru")';
conn.query(sql, function(err, rows, fields) {
    if(err) console.log(err);
    else console.log(rows.insertId);
});
*/

/*
var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
var params = ['Supervisor', 'Watcher', 'graphittie'];
conn.query(sql, params, function(err, rows, fields) {
    if(err) console.log(err);
    else console.log(rows.insertId);
});
*/

//UPDATE
/*
var sql = 'UPDATE topic SET title=?, description=? WHERE id=?';
var params = ['NPM', 'leezche', 1];
conn.query(sql, params, function(err, rows, fields) {
    if(err) console.log(err);
    else console.log(rows);
});
*/

// DELETE
sql = 'DELETE FROM topic WHERE id=?';
var params = [1];
conn.query(sql, params, function(err, rows, fields) {
    if(err) console.log(err);
    else console.log(rows);
});

conn.end(); // 끝냄