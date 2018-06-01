
var mysql = require('mysql');

module.exports = function () {
return mysql.createConnection({
    host :  'localhost',
    user : 'root',
    password : '12345678',
    database : 'portal_noticias'
});


connection.connect(function(err){
    if(err) return console.log(err + " /////// fim erro ");
    console.log('conectou!');
})}