
const fs      = require('fs'),
      http    = require('http'),
      bodyParser  = require('body-parser'),
      dt      = require('./data/data-crud'),
      express = require('express');

const app    = express(),
      server = http.createServer(app);

process.on('uncaughtException', function (err) {
   console.log(err.stack);
});

fs.readFile( __dirname + '/config.json', function (err, data) {
   if( err ) {
      console.log("Error open 'config.json'", err.message);
   }
   else {
      let serverConfig = JSON.parse(data);

      if( serverConfig )  {
         server.listen(serverConfig.port, serverConfig.host, function() {
            console.log("pizza-server listening -> http://" + serverConfig.host + ":" + serverConfig.port);
         });
      }
   }
});

app.use(bodyParser.json());

// ----------------------------------------------------------------- Requests

// curl -H "Content-Type: application/json" -X POST -d '{"username":"admin","password":"admin"}' http://0.0.0.0:1437/login
app.post('/login', (req, res) => {

  let response = {};

  let request = {
    name: req.body.username,
    pwd:  req.body.password
  };

  console.log( request );

  if(request.name === 'admin' && request.pwd === 'admin') {

    /*
    dt.getPizzas(( err, data ) => {

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

      res.json(response);
    });
    */

    dt.getPizzasRoutine( response => {
      res.json(response);
    });
  }
  else {
    response = {
      status: "fail",
      data: null,
      error: "Name or password is not correct"
    };

    res.json(response);
  }

});

app.get('/get-pizzas', ( req, res ) => {

  //let response = {};

  /*

  dt.getPizzas(( err, data ) => {

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

    res.json(response);
  });
  */

  dt.getPizzasRoutine( response => {
    res.json(response);
  });

});


// ----------------------------------------------------------------- Express Error

// for 404
app.use(function(req, res, next) {
   res.send(404, "Sorry we don't find that");
});


app.use(function(err, req, res, next) {
   // NODE_ENV = 'production'
   if(app.get('env') === 'development') {
      let errorHandler = express.errorHandler();
      errorHandler(err, req, res, next);
   }
   else {
      res.send(505);
   }
});
