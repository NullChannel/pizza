
export default class ServerProxy {

  constructor() {}

  async loadPizzas(token = null) {
    return new Promise(resolve => {

      setTimeout(() => {  // for emulate progress-bar visibility

        fetch('http://0.0.0.0:1437/get-pizzas')
          .then(response => response.json())
          .then(json => {
            if (json.status === 'success') {
              return resolve({
                pizzas: json.data.payload
              });
            }
            else {
              return resolve({
                pizzas: null
              });
            }
          });
      }, 1500 );
    });
  }

  updatePizzas( pizzas, callback ) {

    setTimeout(() => {

      let domain  = 'http://0.0.0.0:1437';
      let api     = '/update-pizzas';
      let pathUrl = `${domain}${api}`;

      let request = {
        payload: pizzas
      };

      fetch( pathUrl, {
        method: "post",
        headers: {
           'Accept': '*/*',
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
       })

       .then(res => res.json())

       .then(result => {
          console.log('userLogin(response)', result);
          return callback(result);
       })

       .catch(function (error) {
          console.log('userLogin(FAIL(error): ', error);
          return callback({
            status: "fail",
            data: null,
            error: error
          });
       });

    }, 1500 );
  }

  userLogin( name, pwd, callback ) {

    setTimeout(() => {

      let domain  = 'http://0.0.0.0:1437';
      let api     = '/login';
      let pathUrl = `${domain}${api}`;

      let request = {
        name: name,
        pwd: pwd
      };

      fetch( pathUrl, {
        method: "post",
        headers: {
           'Accept': '*/*',
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
       })

       .then(res => res.json())

       .then(result => {
          console.log('userLogin(response)', result);
          return callback(result);
       })

       .catch(function (error) {
          console.log('userLogin(FAIL(error): ', error);
          return callback({
            status: "fail",
            data: null,
            error: error
          });
       });

    }, 1000);
  }
}
