var async = require('async');

exports = module.exports = function (services) {
    return function (req, res, next) {
        async.waterfall([
            // check if user is authenticated by session
            function (callback) {
                callback(null, req.isAuthenticated());
            },
            // authorize by access-token if no session is present
            function (session, callback) {
                if (session) return callback(null, session);

                services.profile.getApiAccess(req, function (err, authorized) {
                    callback(err, authorized);
                });
            }
        ], function (err, authorized) {
            if (err) return res.send(500, { error: err });

            // get authenticated either by session or access-token
            if (authorized) {
                return next();
            } else {
                return res.send(401, { error: 'not authorized for api access' });
            }
        });
    };
};