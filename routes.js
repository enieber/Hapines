'use strict';

const model = require('./model');
const User = model.User;

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply){
	reply('Hello');
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply){
	reply('Hello '+ encodeURIComponent(request.params.name) + '!');
    }
  },
  {
    method: 'GET',
    path: '/users',
    handler: function (request, reply){
	User.all().then(function(users) {
	  reply(JSON.stringify(users));
	});
    }
  }
]

module.exports = routes;


