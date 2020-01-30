const fs = require('fs');
fs.rmdirSync('new-one');
fs.mkdirSync('new-one');

fs.mkdir('test',()=>{
    console.log("Directory created");
    fs.writeFile('./test/some_new.txt', 'Hello World', ()=>{
        console.log("file created in folder test");
    });
});

fs.renameSync('new-one', 'test');
fs.rmdirSync('test');

fs.rmdir('new-one', ()=>{
   console.log("new-one directory deleted");
});

fs.unlink('world',()=>{
    console.log("File deleted")
});



fs.unlink('./test/some_new.txt',()=>{
   console.log('deleted file some_new');
    fs.rmdir('test',()=>{
       console.log("deleted directory test");
   });
});