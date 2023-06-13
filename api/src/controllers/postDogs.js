const {Dog, Temperament } = require('../db');


const postDogs = async (req, res) =>{
    try {
        const {name, height_min, height_max, weight_min, weight_max, img, life_span, temperament} = req.body
        console.log(req.body);
        console.log(temperament);
        if(!name || !height_min || !height_max || !weight_min || !weight_max)return res.status(400).send('Faltan datos');
        let perro = await Dog.create({
            name,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            img,
        })
        let temperamentDb = await Temperament.findAll ({
            where: {name: temperament}
        })
        // let tempDog = await dog_temperament.create(dogId, temperamentId)
        perro.addTemperament(temperamentDb)
        res.status(200).send(`Se ha creado la raza ${name} con exito`)
    } catch (error) {
        res.status(500).send('Posteo fallido')
    }
}

module.exports = {postDogs}