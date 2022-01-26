const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age < 50) {
      adult += 1;
    } else senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const entradas = countEntrants(entrants);
  const { child, adult, senior } = entradas;
  const valorTotal = child * prices.child + adult * prices.adult + senior * prices.senior;
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
