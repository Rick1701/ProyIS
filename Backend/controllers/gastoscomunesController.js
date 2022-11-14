const GastosComunes = require('../models/gastoscomunesModel');

const createGastoComun = (req, res) => {
    const { nombre_gc, monto_gc, fechavencimiento_gc, estado_gc } = req.body;
    const newGastosComunes = new GastosComunes({
        nombre_gc,
        monto_gc,
        fechavencimiento_gc,
        estado_gc
    });
    newGastosComunes.save((err, gastoscomunesModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el gasto ",nombre_gc })
        }
        return res.status(201).send(gastoscomunesModel)
    })
}
const getGastosComunes = (req, res) => {
    GastosComunes.find({}, (err, gastoscomunesModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los gastos comunes" })
        }
        return res.status(200).send(gastoscomunesModels)
    })
}

const getSpecificGastoComun = (req,res) =>{
    const {id} = req.params;
    GastosComunes.findById(id, (err, gastoscomunesModel) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

const updateGastoComun = (req, res) => {
    const { id } = req.params;
    GastosComunes.findByIdAndUpdate(id, req.body, (err, gastoscomunesModel) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

const deleteGastoComun = (req, res) => {
    const { id } = req.params;
    GastosComunes.findByIdAndDelete(id, (err, gastoscomunesModel) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

//MODIFICAR SOLO MONTOS (SOLO LO HARA EL ENCARGADO)
const modificarSoloMontoGastoComun = (req, res) => {
    const { id } = req.params;
    GastosComunes.findByIdAndUpdate
    (id, { $inc: { monto_gc: req.body.monto_gc } }, (err, gastoscomunesModel) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

module.exports = {
    createGastoComun,
    getGastosComunes,
    getSpecificGastoComun,
    updateGastoComun,
    deleteGastoComun,
    modificarSoloMontoGastoComun
}