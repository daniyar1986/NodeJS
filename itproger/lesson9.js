const fs = require('fs');

const myReadShort = fs.createReadStream(__dirname + '/article.txt','utf8');
const myWriteShort = fs.createWriteStream(__dirname+'/news.txt');

myReadShort.on('data', (chunk)=>{
   console.log("New data ");
   myWriteShort.write(chunk);
});


