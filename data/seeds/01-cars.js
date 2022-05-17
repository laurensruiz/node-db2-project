// STRETCH
const cars = [
    {
        vin: "5J6RM4H75CL059384",
        make: 'toyota',
        model:'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: "JH4KA3140LC003233",
        make: 'toyota',
        model:'corolla',
        mileage: 25000,
        title: 'salvage',
    },
    {
        vin: "1LNHM81V87Y600143",
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