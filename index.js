var http = require('http'),

    count = 1;

http.createServer(function (request, response) {

  var body = [];

  console.log(request.method);
  console.log(request.headers);

  request.on('data', function (chunk) {
      body.push(chunk);
  });

  request.on('end', function () {
      body = Buffer.concat(body);
      console.log(body.toString());
  });

  console.log('new connection: ' + count++);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World\n');
  response.end();
}).listen(8080);

console.log('Server started');
