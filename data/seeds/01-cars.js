// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'Honda',
        model: 'Civic',
        mileage: 67500,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111112',
        make: 'Honda',
        model: 'Accord',
        mileage: 88500,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '1111111111113',
        make: 'GMC',
        model: 'Seirra',
        mileage: 210000,

    }
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
