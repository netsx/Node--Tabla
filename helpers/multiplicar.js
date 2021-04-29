// requireds
const fs = require('fs');
const colors = require('colors');
/*
let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}
*/

const nombreArchivo = async (base = 5, listar = false, hasta = 10) => {

   try{

    let salida ='';

    for(let i = 0 ; i<= hasta; i++){
        salida += `${base} x ${i}  = ${base*i} \n`;
    }
    if(listar === true){
        console.log('================'.green)
        console.log('Tabla del ', base)
        console.log('================'.green)

        console.log(salida)

    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
   
    return `archivo creado ${base}`
   
   }catch(err){
       throw err
   }

}

module.exports = {
    nombreArchivo
    //listarTabla
}