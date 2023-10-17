exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 123).notNullable()
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
