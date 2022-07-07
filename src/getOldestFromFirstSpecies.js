const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((specie) => specie.id === firstSpecie)
    .residents.reduce((animal, animal1) => (animal.age > animal1.age ? animal : animal1));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
