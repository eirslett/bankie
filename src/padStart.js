// Since node.js doesn't have String.prototype.padStart
module.exports = function padStart (str, length, filler) {
  let fillString = ''
  for (let i = str.length; i < length; i++) {
    fillString += filler
  }
  return fillString + str
}
