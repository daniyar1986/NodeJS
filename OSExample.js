const os = require('os');
const fs = require('fs');

console.log("EOL "+os.EOL); //end of line

console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.endianness());
console.log(os.freemem()/1e9); //GB
console.log(os.getPriority(0));
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem()/1e9);
console.log(os.type());
console.log(os.uptime()/60*60*24);
console.log();
console.log();
console.log();
console.log();
console.log();