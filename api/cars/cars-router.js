// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid

} = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {// eslint-disable-line
    res.json(req.car)
})

router.post('/',
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
    async (req, res, next) => {// eslint-disable-line
        res.json('hello')
    })


module.exports = router;