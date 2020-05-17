const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//middleware
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example', (req,res) => {
    res.send('Hitting example route');
})

//Using Route Parameters
app.get('/example/:name/:age', (req,res) => {
    console.log(req.params);
    console.log(req.query);//follows the question mark in url, join with &
    res.send(req.params.name + " : " + req.params.age);
})

//route params = MUST HAVE
//query string param = optional


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))