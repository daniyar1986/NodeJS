const http = require('http');
const fs = require('fs');

const hostname='localhost';
const port = 3000;

let show;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    show = 'Example __dirname = '+__dirname;
    show += '\nExample __filename = '+__filename
    res.end(show);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})