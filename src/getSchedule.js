const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const diaSemana = Object.keys(hours);
const horarios = Object.values(hours);
const segundaFeira = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const callBackReduce = (acc, dia, ind) => {
  const animais = species.filter((specie) => specie.availability.includes(dia))
    .map((item) => item.name);
  acc[dia] = { officeHour: `Open from ${horarios[ind].open}am until ${horarios[ind].close}pm`,
    exhibition: animais };
  return acc;
};

const oRetornoDeJedi = (parametro) => {
  const objeto = {
    [parametro]: {
      officeHour: `Open from ${hours[parametro].open}am until ${hours[parametro].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(parametro))
        .map((item) => item.name),
    },
  };
  return objeto;
};

function getSchedule(scheduleTarget) {
  const buscaAnimalParametro = species.some((element) => element.name === scheduleTarget);
  const buscaDia = diaSemana.some((element) => element === scheduleTarget);
  if (buscaAnimalParametro === false && buscaDia === false) {
    const objetoParaRetorno = diaSemana.reduce(callBackReduce, {});
    objetoParaRetorno.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return objetoParaRetorno;
  }
  if (scheduleTarget === 'Monday') {
    return segundaFeira;
  } if (buscaAnimalParametro) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return oRetornoDeJedi(scheduleTarget);
}

module.exports = getSchedule;

console.log(getSchedule('Monday'));
