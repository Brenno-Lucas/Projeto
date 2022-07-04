const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsList = {};
    species.forEach((list) => { animalsList[list.name] = list.residents.length; });
    return animalsList;
  }
  if (Object.keys(animal).length === 1) {
    const valor = Object.values(animal).toString();
    return species.find((element) => element.name === valor).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const valor = Object.values(animal);
    return species.find((element) => element.name === valor[0]).residents
      .filter((a) => a.sex === valor[1]).length;
  }
}

module.exports = countAnimals;
