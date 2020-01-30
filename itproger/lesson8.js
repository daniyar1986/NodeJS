const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("URL page "+req.url);
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end("Просто обычный текст без HTML");
} );

server.listen(3000,'127.0.0.1');
console.log("We watch port 3000");