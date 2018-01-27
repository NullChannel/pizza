
export default class ServerProxy {

  constructor() {
  }

  async getUser(token = null) {
    return new Promise(resolve => {
      setTimeout(() => {

        fetch('/src/proxy/data-proxy/alerts-user.json')
          .then(response => response.json())
          .then(json => {
            if (json.status === 'success') {
              return resolve({
                user: json.data
              });
            }
            else {
              return resolve({
                user: null
              });
            }
          });
      }, 600);
    });
  }

  userLogin( name, pwd, callback ) {

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
  }
}
