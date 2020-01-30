const fs = require('fs');
const http = require('http');

const myReadShort = fs.createReadStream(__dirname+'/article.txt','utf8');
const myWriteShort = fs.createWriteStream(__dirname+'/newPipe.txt');

myReadShort.pipe(myWriteShort);


const  server = http.createServer( ((req, res) => {
    console.log("URL page "+ req.url);
    // res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    // res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.writeHead(200,{'Content-Type':'application/json; charset=utf-8'});
    //const myReadShort = fs.createReadStream(__dirname+'/article.txt','utf8');
    // const myReadShort = fs.createReadStream(__dirname+'/index.html','utf8');
    // myReadShort.pipe(res);
    const  object = {
        model:"Audi",
        speed: 250,
        wheels: 4
    };

    res.end(JSON.stringify(object));
}) );

server.listen(3000,'127.0.0.1');
console.log("We watch port 3000");