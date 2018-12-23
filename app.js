const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listar } = require('./multiplicar/multiplicar.js')
const { argv } = require('./config/yargs.js')
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .catch(err => {
                console.log(err);
            })
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo.green}`);
            })
            .catch(err => console.log(err));
        break
    default:
        console.log('Comando no reconocido');
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];