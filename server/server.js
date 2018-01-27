
const fs      = require('fs'),
      http    = require('http'),
      cors    = require('cors'),
      bodyParser  = require('body-parser'),
      dt      = require('./data/data-crud'),
      qstring = require('querystring'),
      url     = require('url'),
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

app.use(cors());
app.use(bodyParser.json());

// ----------------------------------------------------------------- Requests

// curl -H "Content-Type: application/json" -X POST -d '{"name":"admin","pwd":"admin"}' http://0.0.0.0:1437/login
app.post('/login', (req, res) => {

  let response = {};

  const name = req.body.name;
  const pwd  = req.body.pwd;

  console.log( `server(/login[name,pwd]): ${name} - ${pwd}`);

  // I didn't use any crypto library !

  if( name === 'admin' && pwd === 'admin') {

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

  dt.getPizzasRoutine( response => {
    res.json(response);
  });
});

// curl http://0.0.0.0:1437/update-pizzas/?payload=[{"pizza":"pepperoni","price":"15"},{"pizza":"ascona","price":"18"}]
app.get('/update-pizzas', ( req, res ) => {

  console.log('/update-pizzas: START');

  const query = qstring.parse(url.parse(req.url).query);

  let response = {};

  let payload = query['payload'];

  console.log('/update-pizzas[payload]: ', payload );

  dt.updatePizzas( payload, (err, data ) => {

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
        data: {},
        error: null
      };
    }

    res.send(response);
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
