var chalk = require('chalk');
var randomColor = require('randomcolor');

const name = process.argv[3];
const shame = process.argv[2];

var color = randomColor({
  luminosity: shame,
  hue: name
});

console.log(color);

console.log(
  chalk.hex(color)(`##############################
##############################
##############################
##############################
##########           #########
########## ${color}   #########
##########           #########
##############################
##############################
##############################
##############################`)
);
console.log(process.argv[2]);
