'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = sequelize.define('users', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    }
});

User.sync({force: true}).then(function(){
  return User.create({
      name: 'Luan',
      email: 'jonsigal@wol.com',
      age: 38
    },{  
      name: 'Longuito',
      email: 'loguito@soy.jo',
      age: 42
    });
});
