'use strict';

const Controller = require('./controller');

exports.register = function (server, options, next) {
 const controller = new Controller(server.database);
 server.router([
  {
    method: 'GET',
    path: 'link',
    config: {
      handler: controller.list
    }
  },
  {
    method: 'GET',
    path: '/link/{id}
    config: {
     handler: controller.read,
     validate: validator.read     
    }
  },
  {
    method: 'POST',
    path: '/link',
    config: {
      handler: controler.create,
      validate: validator.creat
    }
  },
  {
    method: 'PUT',
    path: '/link/{id}',
    config: {
      handler: controller.update,
      validate: validator.update
    }
  },
  {
    method: 'DELETE',
    path: '/link/{id}',
    config: {
      handler: controller.destroy,
      validate: validator.destroy
    }
  },
  {
    method: 'GET',
    path: '/{id}',
    config: {
      handler: controller.goTo  
    }
  }

 ]);
 next();
};

exports.register.attributes = {
  name: 'link-routes',
  version: '1.0.0'
}
