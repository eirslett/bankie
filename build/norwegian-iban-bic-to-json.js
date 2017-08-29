// The XLS dataset is fetched from FinansNorge:
// https://www.google.cz/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwihve3Cmf3VAhXiPZoKHV1TDg4QFgg_MAE&url=https%3A%2F%2Fwww.finansnorge.no%2Fcontentassets%2Fcc4fabf26cea4569aa447aa9ae671efa%2Fnorwegian-iban-bic-table.xls&usg=AFQjCNHH-G8P957EH9vIv5Rg2N4JUQPcew
const fs = require('fs')
const path = require('path')
const xlsx = require('xlsx')

const inputFile = path.resolve(__dirname, '..', 'resources', 'norwegian-iban-bic-table.xls')

console.log('Reading XLS file ' + inputFile)

const workbook = xlsx.readFile(inputFile)
const firstSheetName = Object.keys(workbook.Sheets)[0]
const firstSheet = workbook.Sheets[firstSheetName]

const columnMatcher = /([ABC])([0-9]+)/

const banks = []
Object.keys(firstSheet).forEach(key => {
  const match = columnMatcher.exec(key)
  if (match) {
    let [, letter, number] = match
    number = parseInt(number)
    if (number > 1) {
      const i = number - 2
      const cellValue = firstSheet[key].v.trim()
      if (letter === 'A') {
        banks[i] = {
          id: parseInt(cellValue)
        }
      } else if (letter === 'B') {
        banks[i].bic = cellValue
      } else if (letter === 'C') {
        banks[i].name = cellValue
      }
    }
  }
})

const outputFile = path.resolve(__dirname, '..', 'resources', 'norwegian-iban-bic-table.json')
fs.writeFileSync(
  outputFile,
  JSON.stringify(banks, null, '  ')
)

console.log('Wrote JSON output to ' + outputFile)
