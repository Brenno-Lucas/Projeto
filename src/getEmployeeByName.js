const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((functionary) =>
    functionary.firstName === employeeName || functionary.lastName === employeeName);
}

module.exports = getEmployeeByName;
