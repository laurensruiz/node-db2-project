exports.up = function (knex) {
  // DO YOUR MAGIC
  //unsigned means no negative
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id')

    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 128).notNullable()

    tbl.string('model', 128).notNullable()

    tbl.integer('mileage').unsigned().notNullable() 

    tbl.string('title', 128)

    tbl.string('transmission', 128)
  })
};

//dowm is reverse of up
exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
