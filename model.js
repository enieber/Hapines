'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('users', {
    id: { type: Sequelize.UUID, primaryKey: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER}
});

module.exports.User = User;
