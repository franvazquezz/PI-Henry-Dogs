const {Dog, Temperament} = require('../db');
const {getAll} = require('./functions')


const getAllDogs = async (req, res) => {
    try {
        const {name} = req.query
        let allDogs = await getAll()

        if(name) {
            const raza = allDogs.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()))
            raza.length ? res.status(200).send(raza) : res.status(404).send('No existe tal raza')
        } else {
            res.status(200).send(allDogs)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
const getById = async (req, res)=> {
    try {
        const {id} = req.params
        let allDogs = await getAll()
        if(id){
            let idPerro = allDogs.filter(ele => ele.id == id)
            idPerro.length ? res.status(200).send(idPerro) : res.status(404).send('Raza no encontrada')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {getAllDogs, getById}