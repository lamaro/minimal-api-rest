var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    id:{ type: String },
    slug:{ type: String },
    nombre:{ type: String },
    lanzamiento:{ type: String },
    cover:  { type: String },
    actores:  { type: Array },
});


module.exports = mongoose.model('Pelicula', peliculaSchema,'peliculas');
