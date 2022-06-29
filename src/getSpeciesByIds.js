const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animals) => ids.some((id) => animals.id === id));
}

module.exports = getSpeciesByIds;
