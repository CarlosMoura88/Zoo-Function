const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species
    .find((element) => element.name === animal);
  return animais.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
