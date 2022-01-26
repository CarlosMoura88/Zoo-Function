const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const pegaBicho = species.find((specie) => specie.id === funcionario.responsibleFor[0]);
  const meuBichoVelho = pegaBicho.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = meuBichoVelho[0];
  return [name, sex, age];
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
