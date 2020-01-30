const fs = require('fs');

fs.writeFileSync('hello','Text','utf-8');

fs.rename('hello', 'world', (err) => {
    if (err) throw err;
    console.log('renamed complete');
});
fs.stat('world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});

// fs.unlinkSync('hello', (err,data)=>{
//     if (err)
//         throw err;
//     console.log("successfully deleted");
// });

