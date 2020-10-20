// import libs and dependencies
const { response } = require('express');
const express = require ('express');
const path = require('path');
const pages = require('./pages.js'); // router inside functions as methods

//run express
const server = express();

//using static files
server
    .use(express.static('public'))

//template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

//routes

server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);

//turnon
server.listen(5500);
