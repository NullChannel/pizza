var fs = require('fs');

function getPizzas( callback ) {
   try {

      const file = __dirname + '/pizzas.json';

      fs.readFile( file, function (err, data) {
         if( err ) {
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

function updatePizzas( data, callback ) {
  try {

    const file = __dirname + '/pizzas.json';

    fs.stat( file, (err, stats) => {
      if(err) {
        return callback( err, null );
      }

      fs.unlink(file, err => {
        if(err) return callback( err, null );

        fs.writeFile( file, JSON.stringify(data), 'utf-8', function(err) {
          if (err) {
            return callback( err, null );
          }
          return callback( null, {} );
        });
      });
    });
  }
  catch(err) {
    console.log('ERROR(data-crud.updatePizzas())' + err );
    return callback( 'Fail to update json file', null );
  }
}

module.exports.getPizzas = getPizzas;
module.exports.updatePizzas = updatePizzas;
module.exports.getPizzasRoutine = getPizzasRoutine;
