const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', params)
    .command('crear', 'Crea un archivo de texto con la tabla de muliplicar', params)
    .help()
    .argv;

module.exports = {
    argv
}