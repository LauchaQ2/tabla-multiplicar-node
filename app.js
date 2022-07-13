const {crearArchivo} = require ('./helpers/multiplicar')
const colors = require('colors')

const argv = require('./config/yargs')

console.clear();

//const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
