const URL = 'https://api.thedogapi.com/v1/breeds/';
const {API_KEY} = process.env
const axios = require('axios');
const {Temperament} = require('../db');

const getTemperaments = async (req, res) => {
    try {
        const {data} = await axios(`${URL}?api_key=${API_KEY}`);
        let tempsApi = [];
        data.forEach(dog => {tempsApi.push(dog.temperament)});
        let string = tempsApi.toString();
        let tempArray = string.split(',');
        tempArray = tempArray.map(ele=> ele.trim());
        let sinRepe = [...new Set(tempArray)];
        sinRepe.sort();
        let tempsDB = (sinRepe) => {
            for (let i = 0; i < sinRepe.length; i++) {
                Temperament.findOrCreate({where: {name: sinRepe[i]}})
            }
        }
        tempsDB(sinRepe)
        sinRepe.length ? res.status(200).json(sinRepe) : Temperament ? res.status(200).json(Temperament) : Error.message;
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {getTemperaments}