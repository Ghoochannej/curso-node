var app = require('./config/server');

var rotaNoticias = require('./routes/noticias')(app);
var rotaIndex = require('./routes/home')(app);
var rotaFormNoticias = require('./routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("ok");
});
