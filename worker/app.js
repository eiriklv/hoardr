// dependencies
var mongoose = require('mongoose');
var redis = require('redis');

// config and setup helpers
var config = require('./config');
var helpers = require('../common/helpers')();
var setup = require('./setup');

// database connection
setup.db(mongoose, config);

// pubsub
var rpc = setup.pubsub(redis, config);

// app modules
var ipc = require('../common/ipc')(0);
var models = require('../common/models')(mongoose, helpers.validators);
var services = require('./services')(models, helpers, ipc);

// pubsub
require('./modules/pubsub')(rpc, ipc);

// initialize scraper
require('./modules/scraper')(ipc, services, helpers);
