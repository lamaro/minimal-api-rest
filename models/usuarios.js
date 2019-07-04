var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    id:{ type: String },
    nombre:{ type: String },
    pass:{ type: String }
});


module.exports = mongoose.model('Usuario', usuarioSchema,'usuarios');
