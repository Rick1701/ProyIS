const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PropietarioSchema = new Schema({
    rut_propietario: {
        type: String,
        required: true
    },
    nombre_propietario:{
        type: String,
        required: true
    },
    apellido_propietario:{
        type: String,
        required: true
    },
    correo_propietario:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('propietarioModel', PropietarioSchema);