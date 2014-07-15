exports = module.exports = function (models) {
    return function (userId, url, callback) {
        if (url) {
            models.Article.findById(url, function (err, article) {
                callback(err, article);
            });
        } else {
            models.User
            .findById(userId)
            .select('articles')
            .populate({
                path: 'articles',
                select: 'url title image createdAt',
                model: 'Article',
                options: {
                    sort: '-createdAt'
                }
            })
            .exec(function (err, articles) {
                if (err) return callback(err);
                callback(err, articles);
            });
        }
    };
};