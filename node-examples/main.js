const fatorial = require('./fatorial')

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

/*Exibi os caminhos que o node busca para encontrar
um modulo quando é passado um require
*/
console.log(module.paths)