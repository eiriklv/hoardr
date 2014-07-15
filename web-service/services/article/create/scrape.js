var debug = require('debug')('hoardr:article:scraper');
var colors = require('colors');
var util = require('util');
var read = require('node-read');
var async = require('async');

exports = module.exports = function (helpers) {
    return function (url, callback) {
        debug('scraping site...'.green);
        debug(url.toString().magenta);

        async.waterfall([
        // get url content
        function (callback) {
            read(url, function (err, article, res) {
                callback(err, article);
            });
        },
        // get meta image and set url
        function (article, callback) {
            article.image = helpers.common.getMetaImage(article.dom, url);
            article.url = url;
            callback(null, article);
        }
        // final callback
        ], function (err, article) {
            callback(err, article);
        });
    };
};