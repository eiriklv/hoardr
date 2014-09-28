var async = require('async');

exports = module.exports = function(models, helpers, ipc) {
    return function(userId, body, article, callback) {
        var url = decodeURIComponent(body.url);

        var input = {
            url: url,
            title: body.title || article.title,
            description: body.description || null,
            content: article.content,
            createdAt: new Date(),
            processed: false,
            isPublic: body.isPublic,
            owner: userId
        };

        if (article.image) input.image = article.image;

        var options = {
            upsert: true
        };

        async.waterfall([
            function addArticleToDatabase(callback) {
                models.Article.findOneAndUpdate({
                    url: url,
                    owner: userId
                }, input, options, function(err, product) {
                    if (err) return callback(err);
                    if (!product) return callback('article was not saved or returned');

                    models.User.findById(userId, 'articles', function(err, user) {
                        if (err) return callback(err);
                        if (!user) return callback('no user to add article to..');

                        user.articles.addToSet(product._id);

                        user.save(function(err, savedUser) {
                            callback(err, product);
                        });
                    });
                });
            }
        ],
        function(err, result) {
            callback(err, result);
        });
    };
};
