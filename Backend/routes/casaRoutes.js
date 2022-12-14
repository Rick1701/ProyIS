const express = require('express');
const api = express.Router();
const casaController = require('../controllers/casaController');

api.post('/casaModel', casaController.createCasa);
api.get('/casaModels', casaController.getCasas);
api.get('/casaModel/search/numero/:numero_casa', casaController.getSpecificCasaWithNumero);



module.exports = api;