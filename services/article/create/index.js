var async = require('async');

exports = module.exports = function(models, helpers, ipc, rpc) {
    var scrape = require('./scrape')(helpers);
    var save = require('./save')(models, helpers);

    return function(userId, body, callback) {
        if (!body.url) return callback('no url supplied for storage');

        async.waterfall([
                function scrapeURL(callback) {
                    scrape(body.url, function(err, article) {
                        callback(err, article);
                    });
                },
                function saveToDatabase(article, callback) {
                    save(userId, body, article, function(err, product) {
                        callback(err, product);
                    });
                },
                function passAdditionalWorkToWorker(article, callback) {
                    callback(null, article);
                }
            ],
            function(err, article) {
                rpc.publisher.publish('update', JSON.stringify({
                    id: userId,
                    article: article
                }));

                callback(err, article);
            });
    };
};
