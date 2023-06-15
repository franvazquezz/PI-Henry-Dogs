const {Dog, Temperament} = require('../db');


const postDogs = async (req, res) =>{
    try {
        const {name, height_min, height_max, weight_min, weight_max, img, life_span, temperaments} = req.body
        if(!name || !height_min || !height_max || !weight_min || !weight_max)return res.status(400).send('Faltan datos');
        console.log(temperaments);
        let tempArray = temperaments
        tempArray = tempArray.map(ele=> ele.trim());
        const tempsPromises = tempArray.map(async (tempName) => {
            const tempMatch = await Temperament.findOne({where: {name: tempName}})
            return tempMatch ? {id: tempMatch.id, name: tempMatch.name}
            : Error(`temperament ${tempName} isn't in DB`)
        });
        const matchedTemps = await Promise.all(tempsPromises)
        const newDogRaw = {
            name,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            img,
        }

        const newDogDB = await Dog.create(newDogRaw)
        console.log('matchedTemps', matchedTemps);
        console.log('perro', newDogDB);
        await newDogDB.addTemperaments(matchedTemps.map((temp)=> temp.id))
        res.status(200).send(`Se ha creado la raza ${name} con exito`)
    } catch (error) {
        res.status(500).send('Posteo fallido')
    }
}

module.exports = {postDogs}