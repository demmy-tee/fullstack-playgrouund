// const http = require('http'); // node modules
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   }
//   if (req.url === '/api/v1/students') {
//   res.write(JSON.stringify(['adams', 'lockwood']));
//   res.end();
// }
// });


// server.listen(3000);
// console.log('Listening on port 3000');


const http = require('http');
const server = http.createServer((req, res)=> {
  if (req.url === '/' ) {
    res.write('hello world');
  }
  res.end()
})

server.listen(3001);