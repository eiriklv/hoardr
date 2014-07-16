var async = require('async');

exports = module.exports = function (models, helpers, ipc) {
    return function (userId, url, article, callback) {
        var input = {
            title: article.title,
            content: article.content,
            createdAt: new Date(),
            processed: false
        };

        url = decodeURIComponent(url);

        if (article.image) input.image = article.image;

        var options = {
            upsert: true
        };

        async.waterfall([
        // add article to Article model
        function (callback) {
            models.Article.findByIdAndUpdate(url, input, options, function (err, product) {
                if (err) return callback(err);
                if (!product) return callback('hmmm');

                models.User.findById(userId, 'articles', function (err, user) {
                    if (err) return callback(err);
                    if (!user) return callback('no user to add article to..');

                    user.articles.addToSet(product._id);

                    user.save(function (err, savedUser) {
                        callback(err, product);
                    });
                });
            });
        }
        ],
        function (err, result) {
            callback(err, result);
        });
    };
};