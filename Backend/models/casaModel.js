const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CasaSchema = new Schema({
    numero_casa: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('casaModel', CasaSchema);