const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello World!')
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