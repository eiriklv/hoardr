var request = require('superagent');

exports = module.exports = function(config) {
    return {
        article: require('./article')(request, config.api.url + '/article'),
        profile: require('./profile')(request, config.api.url + '/profile')
    };
};
