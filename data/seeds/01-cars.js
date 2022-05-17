// STRETCH
const cars = [
    {
        vin: "1111111111111",
        make: 'toyota',
        model:'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: "1211111111111",
        make: 'toyota',
        model:'corolla',
        mileage: 25000,
        title: 'salvage',
    },
    {
        vin: "1311111111111",
        make: 'ford',
        model:'focus',
        mileage: 21000,       
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then( () => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}