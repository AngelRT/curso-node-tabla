const fs = require('fs');
const color = require('colors');

/* Son las dos formas de hacer una funcion de forma promesa y utilizarla de tal manera */

const crearArchivo = async(base = 5, listar = false, hasta) => {

    try {


        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`;
        }

        /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt fue creado con exito`);
        }) */

        if (listar != false) {
            console.log('=================='.green);
            console.log('Tabla del', color.blue(base));
            console.log('=================='.green);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }


}

/* const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {
        console.log('==================');
        console.log(`   Tabla del ${base}`);
        console.log('==================');
        let salida = '';

        for (let i = 1; i < 13; i++) {
            salida += `${base} * ${i} = ${base*i}\n`;
        }

        //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //    if (err) throw err;
        //    console.log(`tabla-${base}.txt fue creado con exito`);
        //})

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    })
} */

module.exports = {
    crearArchivo
}