const { describe } = require('yargs');

const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplcar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es el limite de la multiplicacion'
        }
    })
    // los argumentos son mandados para validar que no ingrese un argumento como texto (NaN)
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser un numero';
        }
        // si no existe error mandar el true
        return true;
    })
    .argv;

module.exports = argv;