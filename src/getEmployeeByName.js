const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const objetoVazio = {};
  if (employeeName === undefined) return objetoVazio;
  return employees.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

module.exports = getEmployeeByName;
