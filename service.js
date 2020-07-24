// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request');

function getClients(callback) {

    request('https://sana-hotel-web-api.herokuapp.com/clients?start=0&size=10', { json: true }, function(err,res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });

}

exports.getClients = getClients;

