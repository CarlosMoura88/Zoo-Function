const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const retorno = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((el) => {
    if (el.managers.includes(managerId)) retorno.push(`${el.firstName} ${el.lastName}`);
  });
  return retorno;
}

module.exports = { isManager, getRelatedEmployees };
