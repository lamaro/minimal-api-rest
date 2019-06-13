const crudPeliculas = (app) => {

    const Pelicula = require('../models/peliculas.js');
  
    //FUNCIONES DE ENDPOINTS
    //GET - Devuelve todas las peliculas en la base
    findAllPeliculas = (req, res) => {
        Pelicula.find((err, peliculas) => {
            if(!err){
                console.log('GET /peliculas')
                res.send(peliculas);
            }else{
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new TVShow in the DB
    addPelicula = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var pelicula = new Pelicula({
        id:    req.body.id,
        slug: req.body.slug,
            nombreCer: 	  req.body.nombreCer,
            ubicacionCer:  req.body.ubicacionCer,
            urlImagenCer:   req.body.urlImagenCer,
            promBebCer:  req.body.promBebCer,
            promComCer:    req.body.promComCer,
        lat:  req.body.lat,
        lng:  req.body.lng,
    });

    pelicula.save(function(err) {
        if(!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(pelicula);
};

    //Rutas de la API, asociadas a una función
    app.get('/peliculas', findAllPeliculas); 
    app.post('/peliculas', addPelicula);
}

module.exports = crudPeliculas;