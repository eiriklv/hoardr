var template = require('./template');

exports = module.exports = function (config) {
    return function (req, res) {
        var bookmarklet = template(req.params.userId, req.params.accessToken, config.get('secure_domain'));
        res.set('Content-Type', 'application/javascript');
        res.send(200, bookmarklet);
    };
};
