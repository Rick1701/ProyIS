const express = require('express');
const api = express.Router();
const casaController = require('../controllers/casaController');

api.post('/casaModel', casaController.createCasa);
api.get('/casaModels', casaController.getCasas);
<<<<<<< HEAD
api.delete('/casaModels', casaController.getCasas);
=======
api.get('/casaModel/search/numero/:numero_casa', casaController.getSpecificCasaWithNumero);


>>>>>>> desarollo_moises

module.exports = api;