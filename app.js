var express  = require('express');
var app = express();

var msg = require('./mod_teste');

app.set('view engine','ejs');

app.get('/tecnologia', function(req, res) {
    res.render("tecnologia");
});

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/form_noticias', function(req, res){
    res.render("form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias");
});

app.listen(3000, function(){

    console.log(msg);

});
