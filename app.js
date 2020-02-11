const argv = require('./config/yargs').argv;
const colors = require('colors');

//const fs = require('express');//no es una libreria que este en node, es un paquete que se deve de instalar.
//const fs = require('./fs');//donde se ubicaria elarchivo.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = '10'
let comando = argv._[0];

switch( comando ){// es comuo un if que nos va a ayudar a definir una condicion
   
    case 'listar':
        listarTabla( argv.base, argv.limite );
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.white}`))
            .catch(e=> console.log(e));
        
    break;

    default:
        console.log('Comando no reconocido')

}


// console.log(process.argv);
//let argv2 = process.argv;

//console.log('Limite',argv.limite);

// let parametro = argv[2]; 
// let base = parametro.split('=')[1]




