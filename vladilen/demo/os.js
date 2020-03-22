const os = require("os");

console.log("Operating System", os.platform());
console.log("Architecture ", os.arch());

console.log("CPU information", os.cpus());
console.log("Free memory", os.freemem());
console.log("Total", os.totalmem());

console.log("OS home dir", os.homedir());
console.log("Up time", os.uptime());