const fatorial = require('./fatorial').fatorial

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log("O fatorial de ${num} é igual a ${fatorial(num)}")