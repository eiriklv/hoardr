// dependencies
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

// mock mongoose
mockgoose(mongoose);

// fake connect to db
mongoose.connect('mongodb://localhost/fakedb');

// test subjects dependencies
var helpers = require('../../../common/helpers')();
var models = require('../../../common/models')(mongoose, helpers.validators);

// test subjects
var profile = require('../../services/profile')(models, helpers);
var article = require('../../services/article')(models, helpers);

// tests
describe('Services', function(){
    require('./profile')(profile, models);
    require('./article')(article, models);
});