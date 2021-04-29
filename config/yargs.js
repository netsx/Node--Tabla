const { boolean } = require('yargs');

const argv = require('yargs')
.options({
    b:{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'numero a multiplicar' 
    },
    h:{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: '10',
        describe: 'numero maximo donde llegara la tabla'
    },
    l:{
        alias: 'listar',
        
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'listar  tabla'
    }

})

.check((argv, options) =>{
    if( isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }   
    return true
})

.argv;


module.exports= argv;