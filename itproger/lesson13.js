const  express = require('express');
const  app = express();


app.get('/', (req, res)=>{
    res.send('This home')
});

app.get('/news', (req, res)=>{
    res.send('This news')
});

app.get('/news/:name/:id', (req, res)=>{
    res.send('This news. name : '+req.params.name +' '+req.params.id);
});

app.listen(3000);
