module.exports = function(app){
    
    app.get('/noticias', function(req, res){
        
        var mysql = require('mysql');
        
        var connection = mysql.createConnection({
            host :  'localhost',
            user : 'root',
            port : 3306,
            password : '1234',
            database : 'portal_noticias'
        });

        
        connection.connect(function(err){
            if(err) return console.log(err + " /////// fim erro ");
            console.log('conectou!');
        })
        
        connection.query('select * from noticias', function(error, result){
            res.render("noticias",{noticias : result});
        });

    });
};