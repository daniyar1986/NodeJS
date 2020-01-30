let fs = require('fs');

let file_readed = fs.readFileSync('text.txt','utf-8');
console.log(file_readed);
let message = "Hello World!\n   " + file_readed;
fs.writeFileSync('some_new_file.txt', message);


fs.readFile('text.txt','utf-8',function (err, data) {
    console.log(data);
});

fs.writeFile('some.txt','Hi, it is me',function (err, data) {

});

console.log('Test');