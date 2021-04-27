const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'numero a multiplicar' 

})
.option(('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: 'false',
    describe: 'listar  tabla'
})).option(('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: '10',
    describe: ''
}))
.check((argv, options) =>{
    if( isNaN(argv.b)){
        throw 'la base tiene que ser un numero'
    }   
    return true
})

.argv;


module.exports= argv;