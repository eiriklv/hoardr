var template = require('./template');

exports = module.exports = function (config) {
    return function (req, res) {
    	var domain = config.get('env') === 'production' ? config.get('secure_domain') : config.get('domain')
        var bookmarklet = template(req.params.userId, req.params.accessToken, domain);
        res.set('Content-Type', 'application/javascript');
        res.send(200, bookmarklet);
    };
};
