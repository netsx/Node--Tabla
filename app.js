
const {nombreArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();
//const base = 1;

// console.log(arg3)



nombreArchivo(argv.b,argv.l,argv.h)
.then( ar => console.log(ar.green))
.catch(err => console.log(err,''.red));

/*fs.writeFile(`tabladel${base}.txt`, salida, (err)=>{

    if(err) throw err;
    console.log("Fichero creado");
})*/

