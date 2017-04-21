const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
})

const asyncYolo = (input) => {
  var numbers = promiseNumbers.then(console.log, null);
  var strings = promiseStrings.then(console.log, null);

  return _.zip(numbers, parseStrings(strings))
}

var parseStrings = (input) =>{
  return input.map(val =>{
    return parseIn(val);
  })
}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}
