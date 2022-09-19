module.exports = function(app){
    app.get('/form_add_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });
}