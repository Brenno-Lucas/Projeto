const data = require('../data/zoo_data');

const { employees, species } = data;

function createObject(param) {
  if (param === undefined) {
    const obj = employees.map((employee) => ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((e) => (
        species.find((animal) => (animal.id === e)).name
      )),
      locations: employee.responsibleFor.map((e) => (
        species.find((animal) => (animal.id === e)).location
      )),
    }));
    return obj;
  }
}

function getEmployeesCoverage(param) {
  const test = param && createObject().find((e) => e.id === param.id
  || e.fullName.split(' ')[0] === param.name
  || e.fullName.split(' ')[1] === param.name);
  if (test) {
    return test;
  }
  if (param) {
    throw new Error('Informações inválidas');
  }
  return createObject(param);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
