module.exports = function(app){

    app.get('/noticias', function(req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias'

        });

        connection.query('select * from noticias', function (erro, results){
            res.send(results);
        });
        
        //res.render("noticias/noticias");
    });
};