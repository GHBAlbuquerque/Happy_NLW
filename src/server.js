// import libs and dependencies
const { response } = require('express');
const express = require ('express');
const path = require('path');

//run express
const server = express();

//using static files
server
.use(express.static('public'))

//template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//routes

server.get('/', function(req,res) {
    return res.render('index')
});

//turnon
server.listen(5500);
