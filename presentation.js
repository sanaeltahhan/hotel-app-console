const readline = require('readline');
const service = require('./service.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');
}

function start() {

    menu();

    rl.question('', function (saisie) {

        switch (saisie) {
            case '1':
                console.log(">>Liste des clients");
                // affichage du body qui contient les clients
                service.getClients((client) => {
                    console.log(client);
                    // reaffichage du menu 
                    start();
                });
                break;
            case '99':
                console.log("Adios Amigos");
                rl.close();
                break;
        }
    });

}

exports.start = start;