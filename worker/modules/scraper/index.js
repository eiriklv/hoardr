var debug = require('debug')('hoardr:scraper');
var colors = require('colors');
var util = require('util');
var read = require('node-read');
var async = require('async');

exports = module.exports = function (ipc, services, helpers) {
    function scrapeUrl (data) {
        debug('scraping site...'.green);
        debug(util.inspect(data));

        async.waterfall([
        // get url content
        function (callback) {
            read(data.url, function (err, article, res) {
                callback(err, article);
            });
        },
        // get meta image and set url
        function (article, callback) {
            article.image = helpers.common.getMetaImage(article.dom, data.url);
            article.url = data.url;
            callback(null, article);
        },
        // save the article
        function (article, callback) {
            services.article.add(data.id, data.url, article, function (err, product) {
                callback(err, product);
            });
        }
        ], function (err, product) {
            if (err) return debug(err);
            debug(util.inspect(product));
            ipc.emit('update', { id: data.id, article: product });
        });
    }

    ipc.on('add', scrapeUrl);
};