const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const bichinho = species.find((specie) => specie.name === animal.specie);
  if (animal.sex === undefined) return bichinho.residents.length;
  const resultado = bichinho.residents.filter((el) => el.sex === animal.sex);
  return resultado.length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
