var debug = require('debug')('hoardr:service:profile:get-api-access');
var async = require('async');

exports = module.exports = function (models, helpers) {
    return function (req, callback) {
        if (!req.body) return callback('no request body provided');

        var body = req.body;

        async.waterfall([
            // verify objectid and get user
            function (callback) {
                if (!helpers.isValidObjectId(body.id)) return callback('invalid objectid');
                callback(null, body.id);
            },
            // get user if objectid is valid
            function (id, callback) {
                models.User.findById(id, 'accessToken', function (err, user) {
                    if (err) return callback(err);
                    if (!user) return callback('requested user does not exist');
                    callback(null, user);
                });
            },
            // see if access-token matches
            function (user, callback) {
                if (body.accessToken === user.accessToken) return callback(null, true);
                callback(null, false);
            }
        ], function (err, result) {
            callback(err, result);
        });
    };
};