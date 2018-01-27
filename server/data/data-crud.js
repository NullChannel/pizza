var fs = require('fs');

function getPizzas( callback ) {
   try {

      const folder = __dirname + '/pizzas.json';

      fs.readFile( folder, function (err, data) {
         if( err ) {
            console.log("Error open resource file", err.message);
            return callback(err, null);
         }
         else {
            const content = JSON.parse(data);
            return callback(err, content);
         }
      });
   }
   catch(err) {
      console.log('ERROR(data-crud.getPizzas())' + err );
   }
}

function getPizzasRoutine( callback ) {

  let response = {};

  this.getPizzas(( err, data ) => {

    if( err ) {

      response = {
        status: "fail",
        data: null,
        error: err
      };
    }
    else {

      response = {
        status: "success",
        data: {
          amount: data.length,
          payload: data
        },
        error: null
      };
    }

    return callback( response );
  });
}

function updatePizzas( callback ) {
   try {

      const folder = __dirname + 'pizzas.json';

      fs.readFile( folder, function (err, data) {
         if( err ) {
            console.log("Error open resource file", err.message);
            return callback(err, null);
         }
         else {
            const content = JSON.parse(data);
            return callback(err, content);
         }
      });
   }
   catch(err) {
      console.log('ERROR(data-crud.updatePizzas())' + err );
   }
}

module.exports.getPizzas = getPizzas;
module.exports.updatePizzas = updatePizzas;
module.exports.getPizzasRoutine = getPizzasRoutine;
