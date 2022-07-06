const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const numberChilds = entrants.filter((childs) => childs.age <= 12).length;
  const numberAdults = entrants.filter((childs) => childs.age >= 18 && childs.age < 50).length;
  const numberSeniors = entrants.filter((childs) => childs.age >= 50).length;

  return { adult: numberAdults, child: numberChilds, senior: numberSeniors };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return data.prices.adult * adult + data.prices.child * child + data.prices.senior * senior;
}

module.exports = { calculateEntry, countEntrants };
