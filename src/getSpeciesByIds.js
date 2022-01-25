const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === '') return [];
  const meuRetorno = species.filter((elemento) => ids.includes(elemento.id));
  return meuRetorno;
}

module.exports = getSpeciesByIds;
