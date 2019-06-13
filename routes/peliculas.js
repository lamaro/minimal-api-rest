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

    //Rutas de la API, asociadas a una función
    app.get('/peliculas', findAllPeliculas); 
}

module.exports = crudPeliculas;