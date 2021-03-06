// dependencies
var io = require('socket.io-client');
var handlebars = require('./modules/common/handlebars')(); // register handlebars helpers and partials

// config
var config = require('./config');

// modules
var api = require('./modules/common/api')(config);
var templates = require('./templates')();
var messages = require('./modules/common/messages')();

// application
var app = require('./modules/article/app')(templates, api, io); // this could be the main app

// debug
console.log('article app started');
console.log(config);
