const crudPeliculas = (app) => {

    const Pelicula = require('../models/peliculas.js');
    const Usuario = require('../models/usuarios.js');
  
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

    //GET - Devuelve todas las peliculas en la base
    findAllUsuarios = (req, res) => {
        Usuario.find((err, usuarios) => {
            if(!err){
                console.log('GET /usuarios')
                res.send(usuarios);
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
        nombre: 	  req.body.nombre,
        lanzamiento:  req.body.lanzamiento,
        cover:   req.body.cover
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

//PUT - Update a register already exists
modificarPeliculas = function(req, res) {
    Pelicula.findById(req.params.id, function(err, pelicula) {
        pelicula.id = req.body.id;
        pelicula.slug = req.body.slug;
        pelicula.nombre = req.body.nombre;
        pelicula.lanzamiento = req.body.lanzamiento;
        pelicula.cover = req.body.cover;
        pelicula.save(function(err) {
            if(!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(pelicula);
        });
    });
}

  //DELETE - Delete a Cerveceria with specified ID
  deleteCerveceria = function(req, res) {
    Cerveceria.findById(req.params.id, function(err, cerveceria) {
        cerveceria.remove(function(err) {
            if(!err) {
                console.log('Removed');
            } else {
                console.log('ERROR: ' + err);
            }
      res.send(cerveceria);
        })
    });
}


    //Rutas de la API, asociadas a una función
    app.get('/peliculas', findAllPeliculas); 
    app.post('/peliculas', addPelicula);
    app.put('/peliculas/:id',modificarPeliculas);

    //Usuarios
    app.get('/usuarios', findAllUsuarios); 
}

module.exports = crudPeliculas;