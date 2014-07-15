var async = require('async');

exports = module.exports = function (models, helpers, ipc) {
    return function (userId, url, update, callback) {
        var options = {};

        async.waterfall([
        function (callback) {
            models.Article.findByIdAndUpdate(url, update, options, function (err, product) {
                if (err) return callback(err);
                if (!product) return callback('no product saved');

                callback(err, product);
            });
        }
        ],
        function (err, result) {
            callback(err, result);
        });
    };
};