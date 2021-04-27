const { option, number, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

//console.log('base: yargs', argv.base);


/* Hasta aqui funciona mandando los parametros de manera estatica se creara una forma mejor en la parte de arriba */
//const base = 5;

//console.log(process.argv);
//esto es una destruccturacion de argumentos
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

/* crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); */