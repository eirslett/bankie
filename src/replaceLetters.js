module.exports = function replaceLetters (input) {
  return [...input].map(s => parseInt(s, 36)).join('')
}
