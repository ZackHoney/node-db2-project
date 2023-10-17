exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 123).notNullable()

    tbl.string('model', 123).notNullable()

    tbl.numeric('mileage').unsigned().notNullable()

    tbl.string('title', 123)

    tbl.string('transmission', 123)


  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
