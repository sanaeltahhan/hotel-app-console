//const readline = require('readline');
//const service = require('./service.js')

import readline from 'readline';
import {Service} from './service';
import {Client} from './domain';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const service = new Service();

function menu() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');
}

export function start() {

    menu();

    rl.question('', function (saisie) {

        switch (saisie) {
            case '1':
                console.log(">>Liste des clients");
                // affichage du body qui contient les clients
                service.listerClients().then(clients => {
                    afficherClients(clients);
                    start();
                })
                    .catch(err => console.log('Erreur', err));
                break;
            case '2':
                console.log("Ajouter un client");
                
                    // reaffichage du menu 
                    start();
                break;
            case '99':
                console.log("Adios Amigos");
                rl.close();
                break;
        }
    });

}

function afficherClients(clients:Client[]) {
    clients.forEach( (c:Client) => console.log(c.nom, c.prenoms));
}

//exports.start = start;