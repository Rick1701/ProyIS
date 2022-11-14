const Casa = require('../models/casaModel');
//PRUEBA
const createCasa = (req, res) => {
    const { numero_casa } = req.body;
    const newCasa = new Casa({
        numero_casa
    });
    newCasa.save((err, casaModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la casa" })
        }
        return res.status(201).send(casaModel)
    })
}
const getCasas = (req, res) => {
    Casa.find({}, (err, casaModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las casas" })
        }
        return res.status(200).send(casaModels)
    })
}
const getSpecificCasaWithNumero = (req, res) => {
    const { numero_casa } = req.params;
    Casa.findOne
    ({ numero_casa: numero_casa }, (err, casaModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la casa" })
        }
        if (!casaModel) {
            return res.status(404).send({ message: "Casa no encontrada" })
        }
        return res.status(200).send(casaModel)
    })
}


module.exports = {
    createCasa,
    getCasas,
    getSpecificCasaWithNumero
}