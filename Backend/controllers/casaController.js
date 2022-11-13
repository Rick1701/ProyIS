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



module.exports = {
    createCasa,
    getCasas
}