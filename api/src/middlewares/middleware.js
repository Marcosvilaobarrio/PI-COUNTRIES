const axios = require('axios')
const {Country} = require('../db.js')

const getApiInfo = async () => {
    const apiInfo = await axios('https://restcountries.com/v3/all')
    const infoData = apiInfo.data

    const countryInfo = infoData.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[1],
            capital: country.capital != null ? country.capital[0] : 'No data',
            continent: country.continents[0],
            subregion: country.subregion != null ? country.subregion : 'No data',
            area: country.area,
            population: country.population
        }
    })
    countryInfo.forEach((el)=> {
        Country.findOrCreate({
           
           where: {
               id: el.id,
               name: el.name,
               flag: el.flag,
               continent: el.continent,
               capital: el.capital,
               subregion: el.subregion,
               area: el.area,
               population: el.population
           }
       })
    })               
}

const getAllCountryDetail = async () => {
    const apiInfo = await axios('https://restcountries.com/v3/all')
    const infoData = apiInfo.data

    const countryInfo = infoData.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[1],
            capital: country.capital != null ? country.capital[0] : 'No data',
            continent: country.continents[0],
            subregion: country.subregion != null ? country.subregion : 'No data',
            area: country.area,
            population: country.population
        }
    })
    return countryInfo
}




module.exports = {getApiInfo, getAllCountryDetail}
