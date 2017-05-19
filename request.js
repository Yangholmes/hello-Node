var http = require('http');

// process.exit(1); // 退出程序

// var options = {
//         hostname: 'www.gdrtc.org',
//         port: 80,
//         path: '/car/server/reservation/application-init.php',
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json, text/plain, */*'
//         }
//     };
//
// var request = http.request(options, (response) => {
//   console.log(request);
// });
//
// request.write('Hello World');
// request.end();

http.get('http://www.gdrtc.org/car/server/reservation/application-init.php', (response) => {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});

console.log(process);
