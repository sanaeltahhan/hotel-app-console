const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function menu() {
    console.log('1. Lister les clients');
    console.log('99. Sortir');
  }

function start () {
    
    menu();

    rl.question('', function (saisie) {

        switch(saisie){
            case '1' : console.log(">>Liste des clients");
            menu();
                break;
            case '99' : console.log("Adios Amigos");
                break;
        }
        rl.close();
    });

}

exports.start = start;