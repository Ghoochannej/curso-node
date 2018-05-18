module.exports = function(app){
    app.get('/form_noticias', function(req, res){
        res.render("form_add_noticia");
    });
};