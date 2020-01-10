const fs = require('fs');
fs.mkdirSync('new-one');
fs.renameSync('new-one', 'test');
fs.rmdirSync('test');
