'use strict';

const Hapi = require('hapi');

let server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/',
  config:{
    handler: (request, reply) => {
      reply('hello world');
    }
  }
});

server.register({ register: require('./links/routes'), options: {nome: 'Marcos'}}, function(err){
 if(err){
  throw err;  
 }

 server.start(function (err) {
  if(err){
    throw err;
    }
 
    console.log('server listen at :', server.info.uri);
 });
});

