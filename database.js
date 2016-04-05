'use strict';

const process = require('dotenv').config();
const Sequelize = require('sequelize');

const conn = new Sequelize(
	process.DB_DATABASE, 
	process.DB_USERNAME, 
	process.DB_PASSWORD, {
		host: process.DB_HOST,
		dialect: process.DB_CONNECTION,
		pool: {
			max: 5,
	        	min: 0,
			idle: 10000
		},
	});
console.log(conn);
module.exports = conn;
