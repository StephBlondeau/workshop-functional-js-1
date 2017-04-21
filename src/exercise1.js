const chalk = require('chalk');
var _ = require("lodash");

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
  var result = [];
  if(input.length == 0 ){
    return result;
  }else{

    return input[0].map(function(_,i){
          return input.map(function(input){return input[i]})
      });
  }
}

module.exports = {
  zip: zip,
  run: zip
}
