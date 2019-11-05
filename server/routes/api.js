const express = require('express')
const router = express.Router()
const City = require('../models/city')
const apiKey = "8aca7c0b96c1007371e9a460de3cf027"
const request = require('request')


router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName

    request(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${apiKey}`, function (err, response) {
        if (err) { console.log("Error: " + err) }

        else {
            let data = JSON.parse(response.body)
            console.log(data)
            let filterData = {
                cityName: data.name,
                temperture: data.main.temp,
                condition: data.weather[0].description,
                coditionPic: data.weather[0].icon
            }
            res.send(filterData)
        }
    }
    )
})

router.get('/cities', async (req, res) => {
    const cities = await City.find({})

    res.send(cities)
})

router.post('/city', async (req, res) => {
    const c1 = new City({ name, temperature, condition, conditionPic } = req.body)
    await c1.save()
    res.send(c1)

})
router.delete('/city/:cityName', async (req, res) => {
    let cityName = req.params.cityName
    let deleteCity = await City.findOneAndRemove({
        name: cityName
    })
    res.send(deleteCity)
})


module.exports = router