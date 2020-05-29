
exports.up = function(knex) {
    return knex.schema.createTable('cars', (tbl) => {
      tbl.increments()
      tbl.integer('VIN', 17).notNullable().unique().index()
      tbl.string('Make', 200).notNullable()
      tbl.string('Model', 200).notNullable()
      tbl.float('Mileage',200).notNullable()
      tbl.string('Transmission',200)
      tbl.varchar("status", 200);
          })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  };
