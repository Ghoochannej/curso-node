var app = require('./config/server');

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

    console.log("ok");

});
