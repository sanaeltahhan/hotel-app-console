// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
//var request = require('request');
import request from 'request-promise-native';
import {Client, Chambre, Reservation} from './domain';

export class Service {
    listerClients() {
        return request('https://leo-hotel-web-api.herokuapp.com/clients?start=0&size=10', { json: true })
            .then(body => body);
    }

    ajouterClient(client:Client) {
        return request.post('https://leo-hotel-web-api.herokuapp.com/clients', { json: client });
    }
}

/*function getClients(callback) {

    request('https://sana-hotel-web-api.herokuapp.com/clients?start=0&size=10', { json: true }, function(err,res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });

}*/

//exports.getClients = getClients;

