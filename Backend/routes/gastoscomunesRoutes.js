const express = require('express');
const api = express.Router();
const gastoscomunesController = require('../controllers/gastoscomunesController');

api.post('/gastoscomunesModel', gastoscomunesController.createGastoComun);
api.get('/gastoscomunesModels', gastoscomunesController.getGastosComunes);
api.get('/gastoscomunesModel/search/:id', gastoscomunesController.getSpecificGastoComun);
api.put('/gastoscomunesModel/update/:id', gastoscomunesController.updateGastoComun);
api.delete('/gastoscomunesModel/delete/:id', gastoscomunesController.deleteGastoComun);
api.put('/gastoscomunesModel/pagarDeuda/:id', gastoscomunesController.pagarGastoComun);
api.put('/gastoscomunesModel/modificarMonto/:id', gastoscomunesController.modificarSoloMontoGastoComun);
module.exports = api;