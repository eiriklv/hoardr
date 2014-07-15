var async = require('async');

exports = module.exports = function (models, helpers, ipc, rpc) {
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
            callback(null, article);
        }
        ],
        function (err, article) {
            rpc.publisher.publish('update', JSON.stringify({ id: userId, article: article })); // publish to redis rpc
            callback(err, article);
        });
    };
};