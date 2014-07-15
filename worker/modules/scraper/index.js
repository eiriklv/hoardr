var debug = require('debug')('hoardr:scraper');
var colors = require('colors');
var util = require('util');
var read = require('node-read');
var async = require('async');

exports = module.exports = function (ipc, services, helpers) {
    function doWorkOnItem (data) {
        debug('scraping site...'.green);
        debug(util.inspect(data));

        async.waterfall([
        // do some work on item
        function (callback) {
            var update = { processed: true };
        },
        // save the article
        function (update, callback) {
            services.article.update(data.id, data.url, update, function (err, product) {
                callback(err, product);
            });
        }
        ], function (err, product) {
            if (err) return debug(err);
            debug(util.inspect(product));
            ipc.emit('update', { id: data.id, article: product });
        });
    }

    ipc.on('add', doWorkOnItem);
};