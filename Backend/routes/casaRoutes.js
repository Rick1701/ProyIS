const express = require('express');
const api = express.Router();
const casaController = require('../controllers/casaController');

api.post('/casaModel', casaController.createCasa);
api.get('/casaModels', casaController.getCasas);
api.delete('/casaModels', casaController.getCasas);

module.exports = api;