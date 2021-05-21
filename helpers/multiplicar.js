const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida ='';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.blue} ${i} ${'='.yellow} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('================'.green);
            console.log(colors.red(`Tabla de ${base}`));
            console.log('================'.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`Tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}