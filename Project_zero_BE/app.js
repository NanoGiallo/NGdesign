const path = require('path');
const express = require('express');

const mainRoute = require('./Routes/main_route')

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/api', mainRoute) 

app.get('/', function(req, res){
    res.status(200).send('Hello word')
})

app.listen(5000, function(){
    console.log('Sto correndo')
});