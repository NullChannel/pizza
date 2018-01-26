
const fs      = require('fs'),
      http    = require('http'),
      bodyParser  = require('body-parser'),
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
