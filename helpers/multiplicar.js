const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    let salida = '';
    let  consola = '';
    for (let index = 0; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
        consola += `${base} ${'x'.green} ${index} = ${base * index}\n`;
    }
    if (listar) {
        console.log('======================='.red)
        console.log('TABLA DEL'.red, colors.white(base), ' hasta ', hasta)
        console.log('======================='.red)
        console.log(consola)
    }

    fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)

    return `tabla-${base}.txt`.rainbow;

}

module.exports = {
    crearArchivo
}