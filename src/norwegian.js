const replaceLetters = require('./replaceLetters')
const bankInfo = require('../resources/norwegian-iban-bic-table.json')

module.exports.name = 'Norway'

module.exports.requiredFields = [{
  name: 'account',
  type: 'number'
}]

module.exports.getBanks = function () {
  return bankInfo
}

module.exports.getData = function (params) {
  const bankCode = parseInt(String(params.account).substr(0, 4))
  const bank = bankInfo.find(bank => bank.id === bankCode)
  const bankCodeReplaced = replaceLetters('NO00')
  const combined = parseInt(String(params.account) + bankCodeReplaced)
  const check = String(98 - (combined % 97)).padStart(2, '0')
  const iban = 'NO' + check + String(params.account)

  return {
    iban,
    bank
  }
}
