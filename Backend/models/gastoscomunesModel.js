const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GastosComunesSchema = new Schema({
    nombre_gc: {
        type: String,
        required: true
    },
    monto_gc:{
        type: Number,
        required: true
    },
    fechavencimiento_gc:{
        type: Date,
        required: true
    },
    estado_gc:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('gastoscomunesModel', GastosComunesSchema);