const chalk = require('chalk');
var _ = require("lodash");

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
  var result = [];
  if(input.length == 0 ){
    return result;
  }else{

    return input[0].map(function(item){
      var tab = [];
      tab.push(item);
      return tab;
    })
  }
}

module.exports = {
  zip: zip,
  run: zip
}
