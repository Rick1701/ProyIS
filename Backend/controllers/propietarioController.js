const Propietario = require('../models/propietarioModel');

const createPropietario = (req, res) => {
    const { rut_propietario, nombre_propietario, apellido_propietario , correo_propietario } = req.body;
    const newPropietario = new Propietario({
        rut_propietario,
        nombre_propietario,
        apellido_propietario,
        correo_propietario
    });
    newPropietario.save((err, propietarioModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el propietario" })
        }
        return res.status(201).send(propietarioModel)
    })
}
const getPropietarios = (req, res) => {
    Propietario.find({}, (err, propietarioModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los propietarios" })
        }
        return res.status(200).send(propietarioModels)
    })
}
const deletePropietario = (req, res) => {
    const { id } = req.params;
    Propietario.findByIdAndDelete(id, (err, propietarioModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el propietario" })
        }
        if (!propietarioModel) {
            return res.status(404).send({ message: "Propietario no encontrado" })
        }
        return res.status(200).send(propietarioModel)
    })
}



module.exports = {
    createPropietario,
    getPropietarios,
    deletePropietario
}