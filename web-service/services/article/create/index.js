var async = require('async');

exports = module.exports = function (models, helpers, ipc) {
    var scrape = require('./scrape')(helpers);
    var save = require('./save')(models, helpers);

    return function (userId, body, callback) {
        if (!body.url) return callback('no url supplied for storage');

        async.waterfall([
        // scrape url
        function (callback) {
            scrape(body.url, function (err, article) {
                callback(err, article);
            });
        },
        // save to db
        function (article, callback) {
            save(userId, body.url, article, function (err, product) {
                callback(err, product);
            });
        },
        // pass additional work to worker
        function (article, callback) {
            ipc.emit('add', { id: userId, url: body.url });
            callback(null, article);
        }
        ],
        function (err, article) {
            callback(err, article);
        });
    };
};