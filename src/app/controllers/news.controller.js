const Search = require('./../models/newsapi');

class NewsController {

    getNews(req,res) {

        const search = new Search(req.query.subject);

        search.find()
            .then( results =>{
                if(results.data.articles.length > 0){
                    let array = results.data.articles;
                    res.render('news', {array});
                } else {
                    res.send('No se encontraron noticias sobre: ' + req.query.subject)
                }
            })
            .catch(err =>{
                res.send('Error en la busqueda');
            });
    }
}

module.exports = new NewsController();