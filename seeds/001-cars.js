
exports.seed = function(knex) {
  const testData = [
    { vin: '3C3FFB1', 
      make: 'Fiat', 
      model: '500', 
      mileage: '30,000', 
      transmission: 'auto', 
      status: 'clean' 
    },
    { vin: '3C3FFB2', 
      make: 'Toyota', 
      model: 'Camry', 
      mileage: '40,000', 
      transmission: 'manual', 
      status: 'salvage' 
    },
    { vin: '3C3FFB3', 
      make: 'Honda', 
      model: 'Civic', 
      mileage: '50,000', 
      transmission: 'auto', 
      status: 'clean' },
  ]


  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(testData)
    })
};
