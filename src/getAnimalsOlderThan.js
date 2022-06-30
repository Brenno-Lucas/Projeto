const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((kind) => kind.name === animal)
    .residents.every((dweller) => dweller.age >= age);
}

module.exports = getAnimalsOlderThan;
